import '../css/reset.css';
import '../scss/style.scss';
import '../scss/responsive.scss';
import simpleParallax from 'simple-parallax-js';

var images = document.querySelectorAll('.parallax');
var instance = new simpleParallax(images, {
    scale: 1.6,
    delay: 0
});


