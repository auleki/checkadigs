// new WOW().init();

const word = document.getElementById("word");
const genesis = document.getElementById("genesis");
const navbar = document.querySelector('.navbar');
const burger = document.querySelector('.hamburger');



makeResponive = () => {
    let navClass = navbar.className;
    if (navClass === 'navbar') {        
        navbar.className = `navbar responsive`
    } else {
        navbar.className = "navbar"
    }    
}

burger.addEventListener('click', makeResponive)


// CLOSE MENU 





word.addEventListener("click", () => {
    genesis.scrollIntoView();
})




$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 3,
        animateIn: true,
        dots: true,
        lazyLoad: true,
        rewind: true,
        responsive: {
            0: {
                items: 1,
                loop: true,
                
            },
            600: {
                items: 2,
                loop: true,
            },
            1000: {
                items: 3,
                loop: true
            }
        }
    });
});