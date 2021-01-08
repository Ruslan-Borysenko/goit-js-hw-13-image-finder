import { finalMarkupLoadMoreBtn } from './dynamic-markup';

const options = {
  root: document.querySelector('.image-gallery'),
  threshold: 1.0,
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      finalMarkupLoadMoreBtn();
    }
  });
});

export function infiniteScroll() {
  observer.observe(document.querySelector('#infinite-scroll-trigger'));
}
