const crossDiv = document.querySelector(".cross-div");
const ovalDiv = document.querySelector(".oval-div");

const cross = document.querySelector(".cross");
const oval = document.querySelector(".oval");

crossDiv.addEventListener("click", ()  => {
    crossDiv.style.backgroundColor = "var(--silver)";
    cross.style.fill = "var(--dark-navy)";
    cross.style.backgroundColor = "var(--silver)";

    ovalDiv.style.backgroundColor = "var(--dark-navy)";
    oval.style.fill = "var(--silver)";
    oval.style.backgroundColor = "var(--dark-navy)";
})

ovalDiv.addEventListener("click", ()  => {
    ovalDiv.style.backgroundColor = "var(--silver)";
    oval.style.fill = "var(--dark-navy)";
    oval.style.backgroundColor = "var(--silver)";

    crossDiv.style.backgroundColor = "var(--dark-navy)";
    cross.style.fill = "var(--silver)";
    cross.style.backgroundColor = "var(--dark-navy)";
})
















