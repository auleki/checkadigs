// new WOW().init();

const word = document.getElementById("word");
const genesis = document.getElementById("genesis");
const navbar = document.querySelector('.navbar');
const burger = document.querySelector('.hamburger');

// const navbarClass = navbar.className;
// console.log(navbarClass);


makeResponive = () => {
    let navClass = navbar.className;
    // console.log(navClasses);
    // if (x.className === "topnav") {
    //     x.className += " responsive";
    //   } else {
    //     x.className = "topnav";
    //   }

    console.log(navClass);
    if (navClass === 'navbar') {
        console.log("MAKE RESPONSIVE");
        navbar.className = `navbar responsive`
    } else {
        console.log("ONLY NAVBAR");

        navbar.className = "navbar"
    }
    
}

burger.addEventListener('click', makeResponive)

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