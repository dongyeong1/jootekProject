let underline = document.querySelector(".underline");
let menus = document.querySelectorAll(".headermenu a");

menus.forEach((e) => {
    e.addEventListener("mouseover", (e) => horizontalIndicator(e));
});

function horizontalIndicator(e) {
    underline.style.left = e.currentTarget.offsetLeft - 55 + "px";
    // underline.style.width = e.currentTarget.offsetWidth + "px";
    underline.style.width = 20 + "%";
    underline.style.top = 65 + "px";
}
