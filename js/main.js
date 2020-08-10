new WOW().init();

const word = document.getElementById("word");
const genesis = document.getElementById("genesis");

word.addEventListener("click", () => {
    genesis.scrollIntoView();
})

