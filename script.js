const navSlide = () => {
    const slides = document.querySelector('.burger');
    const nav = document.querySelector('.links');


    //Toggle Nav
    slides.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}

navSlide();