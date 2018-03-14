const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const browserSync = require('browser-sync').create();
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const del = require('del');

gulp.task('serve', ['sass'], function() {

  browserSync.init({
      server: "./src"
  });

  gulp.watch("src/scss/*.scss", ['sass']);
  gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
  return gulp.src("src/scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);

gulp.task('html:dist', function() {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('css:dist', function() {
  const plugins = [
    autoprefixer({ browsers: ['last 2 versions'] }),
    cssnano()
  ];

  return gulp.src('src/css/*.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('js:dist', function() {
  return gulp.src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});

gulp.task('img:dist', function() {
  return gulp.src('src/img/*')
    .pipe(cache(imagemin({
      interlaced: true
    })))
    .pipe(gulp.dest('dist/img'));
});

gulp.task('build', ['html:dist', 'css:dist', 'js:dist', 'img:dist']);

gulp.task('clean', function() {
  del('dist');
});