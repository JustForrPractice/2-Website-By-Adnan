let hamburger = document.querySelector('#hamburger');
let navlink = document.querySelector('.nav-links');
let rightnav = document.querySelector('.right-nav');
let navbar = document.querySelector('#nav-bar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('navbar-h');
    navlink.classList.toggle('navlinks-vis');
    rightnav.classList.toggle('rightnav-vis');
});