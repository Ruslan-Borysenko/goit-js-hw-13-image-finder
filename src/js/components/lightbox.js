import { refs } from '../refs';

const openLightbox = function () {
  window.addEventListener('keydown', onPressEscape);
  refs.lightbox.classList.toggle('is-open');
};

const closeLightbox = function () {
  refs.lightbox.classList.toggle('is-open');
  window.removeEventListener('keydown', onPressEscape);
  refs.lightboxImage.src = '';
};

const handleUlClick = function (event) {
  event.preventDefault();

  const target = event.target;
  const fullSizeImg = target.src;

  if (target.nodeName !== 'IMG') return;
  refs.lightboxImage.src = fullSizeImg;
  openLightbox();
};

const onPressEscape = function (event) {
  if (event.code === 'Escape') {
    closeLightbox();
  }
};

// handlers
refs.gallery.addEventListener('click', handleUlClick);
refs.lightboxOverlay.addEventListener('click', closeLightbox);
