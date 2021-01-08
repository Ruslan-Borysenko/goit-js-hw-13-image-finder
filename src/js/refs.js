import { finalMarkup, finalMarkupLoadMoreBtn } from './dynamic-markup';
const debounce = require('lodash.debounce');

export const refs = {
  body: document.querySelector('body'),

  //create input form
  formGroup: document.createElement('div'),
  searchInput: document.createElement('input'),
  label: document.createElement('label'),

  //create lightbox
  lightbox: document.createElement('div'),
  lightboxOverlay: document.createElement('div'),
  lightboxContent: document.createElement('div'),
  lightboxImage: document.createElement('img'),

  gallery: document.createElement('ul'),
  loadMoreBtn: document.createElement('button'),
  infiniteScrollTrigger: document.createElement('div'),
};

export function addEventListeners() {
  return (
    refs.searchInput.addEventListener('input', debounce(finalMarkup, 500)),
    refs.loadMoreBtn.addEventListener('click', finalMarkupLoadMoreBtn)
  );
}

export function createDOM() {
  //add classes&attributes for input form
  refs.formGroup.classList.add('form__group', 'field');

  refs.searchInput.classList.add('form__field', 'is-hidden');
  refs.searchInput.setAttribute('type', ' input');
  refs.searchInput.setAttribute('placeholder', ' Name');
  refs.searchInput.setAttribute('name', ' name');
  refs.searchInput.setAttribute('id', ' name');

  refs.label.classList.add('form__label');
  refs.label.setAttribute('for', 'name');
  refs.label.textContent = 'Search images...';

  //add input form
  refs.body.append(refs.formGroup);
  refs.formGroup.append(refs.searchInput);
  refs.formGroup.append(refs.label);

  //add classes&attributes for lightbox
  refs.lightbox.classList.add('lightbox', 'js-lightbox');
  refs.lightboxOverlay.classList.add('lightbox__overlay');
  refs.lightboxContent.classList.add('lightbox__content');

  refs.lightboxImage.classList.add('lightbox__image');
  refs.lightboxImage.setAttribute('src', '#');
  refs.lightboxImage.setAttribute('alt', '');

  //add lightbox
  refs.body.append(refs.lightbox);
  refs.lightbox.append(refs.lightboxOverlay);
  refs.lightbox.append(refs.lightboxContent);
  refs.lightboxContent.append(refs.lightboxImage);

  //add gallery
  refs.gallery.classList.add('image-gallery', 'list');
  refs.body.append(refs.gallery);

  //add loadMoreBtn
  refs.loadMoreBtn.setAttribute('data-action', 'load-more');
  refs.loadMoreBtn.classList.add('btn', 'is-hidden');
  refs.loadMoreBtn.textContent = 'Show more';
  refs.body.append(refs.loadMoreBtn);

  //add infiniteScrollTrigger
  refs.infiniteScrollTrigger.setAttribute('id', 'infinite-scroll-trigger');
  refs.body.append(refs.infiniteScrollTrigger);
}
