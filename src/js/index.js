import '../css/reset.css';
import '../scss/style.scss';
import '../scss/responsive.scss';
import simpleParallax from 'simple-parallax-js';

var images = document.querySelectorAll('.parallax');
var instance = new simpleParallax(images, {
    scale: 1.4
});

function qs(a) {
    return document.querySelector(a);
}

let logoCircle = qs('.preloader-logo__circle');
let counterCircle = qs('.counter-circle');
let overlay = qs('.overlay');
let loaded = 1;

function updatePercents() {
    counterCircle.textContent = `${loaded}%`;
    console.log(`${loaded}%`);
    loaded += 1;
    if (loaded < 100) {
        let int = setTimeout(()=>{
            updatePercents();
        }, 20);
    } else {
        counterCircle.textContent = `100%`;
        return;
    }
}
updatePercents();

function hidePreloader () {
    if (loaded >= 100) {
        logoCircle.classList.add('loaded');
        counterCircle.classList.add('loaded');
        overlay.classList.add('loaded');
        setTimeout(()=>{
            logoCircle.style.display = 'none';
            counterCircle.style.display = 'none';
            overlay.style.display = 'none';
        }, 1000)
    } else {
        setTimeout(hidePreloader, 10);
    }

}

window.addEventListener('load', () => {
    hidePreloader();
});