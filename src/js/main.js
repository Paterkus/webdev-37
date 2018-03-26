// MENU

const pageHeader = document.querySelector('.page-header');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 50) {
    pageHeader.style.background = '#bc2e3a';
  } else {
    pageHeader.style.background = 'none';
  }
});

// SLIDER

const sliderItems = document.querySelectorAll('.team__item'),
    arrowLeft = document.querySelector('.team__arrow--left'),
    arrowRight = document.querySelector('.team__arrow--right');

arrowLeft.addEventListener('click', function() {
  for (i = 0; i < sliderItems.length; i++) {
    if (sliderItems[i].classList.contains('team__item--center')) {
      sliderItems[i].classList.remove('team__item--center');
      sliderItems[i].classList.add('team__item--left');
    } else if (sliderItems[i].classList.contains('team__item--left')) {
      sliderItems[i].classList.remove('team__item--left');
      sliderItems[i].classList.add('team__item--hidden');
    } else if (sliderItems[i].classList.contains('team__item--right')) {
      sliderItems[i].classList.remove('team__item--right');
      sliderItems[i].classList.add('team__item--center');
    } else {
      sliderItems[i].classList.remove('team__item--hidden');
      sliderItems[i].classList.add('team__item--right');
    }
  }
});

arrowRight.addEventListener('click', function() {
  for (i = 0; i < sliderItems.length; i++) {
    if (sliderItems[i].classList.contains('team__item--center')) {
      sliderItems[i].classList.remove('team__item--center');
      sliderItems[i].classList.add('team__item--right');
    } else if (sliderItems[i].classList.contains('team__item--left')) {
      sliderItems[i].classList.remove('team__item--left');
      sliderItems[i].classList.add('team__item--center');
    } else if (sliderItems[i].classList.contains('team__item--right')) {
      sliderItems[i].classList.remove('team__item--right');
      sliderItems[i].classList.add('team__item--hidden');
    } else {
      sliderItems[i].classList.remove('team__item--hidden');
      sliderItems[i].classList.add('team__item--left');
    }
  }
});

// CLIENTS
const clientsItems = document.querySelectorAll('.clients__item');
      clientsThumbnails = document.querySelectorAll('.clients__thumbnail');

function reset() {
  for (let i = 0; i < clientsItems.length; i++) {
    clientsItems[i].style.display = 'none';
    clientsThumbnails[i].style.border = 'none';
  };
};

function startClients() {
  reset();
  clientsItems[0].style.display = 'block';
  clientsThumbnails[0].style.border = '5px solid #bc2e3a';
};

function onThumbnailClick(index) {
  clientsThumbnails[index].addEventListener('click', function() {
    reset();
    clientsItems[index].style.display = 'block';
    clientsThumbnails[index].style.border = '5px solid #bc2e3a';
  });
}

startClients();

onThumbnailClick(0);
onThumbnailClick(1);
onThumbnailClick(2);