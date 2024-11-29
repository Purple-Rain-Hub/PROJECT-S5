const pageHeader = document.querySelector("header");
const getStarted = document.getElementById("getStarted")

window.addEventListener("scroll", scroll);

function scroll() {
    if(window.scrollY > 350){
        pageHeader.classList.add("white");
        getStarted.classList.add("green");
    }else if (window.scrollY < 350){
        pageHeader.classList.remove("white");
    }
}