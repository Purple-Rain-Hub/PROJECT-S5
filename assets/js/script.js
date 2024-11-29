// funzione per l'header bianco e bottone verde

const pageHeader = document.querySelector("header");
const getStarted = document.getElementById("getStarted");

window.addEventListener("scroll", scroll);

function scroll() {
  if (window.scrollY > 350) {
    pageHeader.classList.add("white");
    getStarted.id = "green";
  } else if (window.scrollY < 350) {
    pageHeader.classList.remove("white");
    getStarted.removeAttribute("id");
    getStarted.id = "getStarted";
  }
}

// animazione lettere M

function letterTransition() {
  let letter = randomLetter();
  let opacity = parseInt(letter.getAttribute("opacity"));
  if (opacity === 0) {
    letter.setAttribute("opacity", 1);
  } else {
    letter.setAttribute("opacity", 0);
  }
};

function randomLetter() {
  const gs = document.querySelectorAll("g[stroke-linecap=butt]");
  let random = Math.floor(Math.random() * gs.length);
  let currentLetter = gs[random];
  return currentLetter;
};


function lettersAnimation() {
  setInterval(function () {
    letterTransition();
  }, 30);
};

window.onload = function () {
  lettersAnimation();
};
