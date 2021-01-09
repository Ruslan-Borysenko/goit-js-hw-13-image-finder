import { createDOM, addEventListeners } from './refs';
import './components/lightbox';

addEventListeners();
createDOM();

console.log(window.innerHeight);
