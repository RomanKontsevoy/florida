import '../css/reset.css';
import '../scss/style.scss';
import '../scss/responsive.scss';
import Vue from 'vue';
import simpleParallax from 'simple-parallax-js';

var app = new Vue({
    el: '#app',
    data: {
        message: 'Привет, Vue!'
    }
});

var images = document.querySelectorAll('.parallax');
var instance = new simpleParallax(images, {
    scale: 1.5
});
