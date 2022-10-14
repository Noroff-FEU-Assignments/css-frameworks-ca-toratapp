const firstCardHeader = document.querySelector(".accordion__first-card-header");
const secondCardHeader = document.querySelector(".accordion__second-card-header");
const thirdCardHeader = document.querySelector(".accordion__third-card-header");

function addBorderFirstHeader() {
    firstCardHeader.classList.add("border-bottom");
}

addBorderFirstHeader();

firstCardHeader.onclick = function (event) {
    firstCardHeader.classList.remove("border-bottom");
    secondCardHeader.classList.remove("border-bottom");
    thirdCardHeader.classList.remove("border-bottom");
    firstCardHeader.classList.add("border-bottom");
}

secondCardHeader.onclick = function (event) {
    firstCardHeader.classList.remove("border-bottom");
    secondCardHeader.classList.remove("border-bottom");
    thirdCardHeader.classList.remove("border-bottom");
    secondCardHeader.classList.add("border-bottom");
}

thirdCardHeader.onclick = function (event) {
    firstCardHeader.classList.remove("border-bottom");
    secondCardHeader.classList.remove("border-bottom");
    thirdCardHeader.classList.remove("border-bottom");
    thirdCardHeader.classList.add("border-bottom");
}
