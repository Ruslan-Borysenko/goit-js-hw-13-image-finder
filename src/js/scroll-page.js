export function scrollPage() {
  const photoBlock = document.querySelector('.image-gallery__item');
  window.scrollBy({
    top: photoBlock.clientHeight,
    behavior: 'smooth',
  });
}
