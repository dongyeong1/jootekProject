let hamburgerMenu = document.querySelector(".fa-bars");
let cancelButton = document.querySelector(".cancel");
let slideMenu = document.querySelector(".slidemenu");

hamburgerMenu.addEventListener("click", () => {});
cancelButton.addEventListener("click", () => {
    slideMenu.classList.remove("showmenu");
});

function menushow() {
    console.log("asdasdas");
    slideMenu.classList.add("showmenu");
}
