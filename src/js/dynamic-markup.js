import { refs } from './refs';
import galleryTemplate from '../templates/gallery-template.hbs';
import apiService from './apiServise';
import { infiniteScroll } from './infinite-scroll';
import { scrollPage } from './scroll-page';

function makeMarkup(imgArray) {
  const markup = galleryTemplate(imgArray);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

function clearMarkup() {
  refs.gallery.textContent = '';
}

export function finalMarkup() {
  clearMarkup();
  apiService.searchQuery = refs.searchInput.value;

  if (apiService.searchQuery === '' || apiService.searchQuery === ' ') {
    refs.loadMoreBtn.classList.add('is-hidden');
    return;
  }

  apiService.resetPage();
  apiService.fetchImg().then(images => {
    makeMarkup(images);
    infiniteScroll();
    refs.loadMoreBtn.classList.remove('is-hidden');
    return;
  });
}

export function finalMarkupLoadMoreBtn() {
  apiService.fetchImg().then(result => {
    makeMarkup(result);
    scrollPage();
  });
}
