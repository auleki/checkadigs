// new WOW().init();

const word = document.getElementById("word");
const genesis = document.getElementById("genesis");
const navbar = document.querySelector('.navbar');
const burger = document.querySelector('.hamburger');
let emailInput = document.getElementById("email");
// const subscribeBtn = document.getElementById("subscribeBtn");
const subscribeForm = document.getElementById("subscribeForm");



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

// shouldDisable = (input) => {
//     if (input.value != '') {
//         subscribeBtn.disabled = false
//     } else {
//         subscribeBtn.disabled = true
//     }
// }
// shouldDisable(emailInput)

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



// SUBSCRIPTION FORM 
const funcURL = 'https://script.google.com/macros/s/AKfycbwNjscNxQFBL8r_QxSdkifqfC4f8rED_n5DYLQeu3klraEcnbgi/exec';


subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(funcURL, {  method: "POST", body: new FormData(subscribeForm)  })
        .then(response => alert("Thanks for Contacting us..! We will reach back"))
        .catch(err => console.log("error with form!", err.message))
    // console.log(emailInput.value);
    emailInput.value = ''
})