const crossDiv = document.querySelector(".cross-div");
const ovalDiv = document.querySelector(".oval-div");

const cross = document.querySelector(".cross");
const oval = document.querySelector(".oval");

crossDiv.addEventListener("click", ()  => {
    crossDiv.classList.add = "selected";
    cross.classList.remove = "selected";

    cross.classList.add = "unselected";
    crossDiv.classList.remove = "selected";
})

ovalDiv.addEventListener("click", ()  => {
    
})



















