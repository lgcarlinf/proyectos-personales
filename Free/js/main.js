const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () =>{
        // Toggle nav
        nav.classList.toggle('nav-active');
        // Burger ANimation
        burger.classList.toggle('toggle');
    })
}
navSlide();