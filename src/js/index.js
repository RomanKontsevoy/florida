import '../css/reset.css';
import '../scss/style.scss';
import '../scss/responsive.scss';
import '../scss/temp.scss';
import Vue from 'vue';

var app = new Vue({
    el: '#app',
    data: {
        message: 'Привет, Vue!'
    }
});