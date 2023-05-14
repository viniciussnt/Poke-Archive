const toggleTheme = document.getElementById("toggle-theme");
const body = document.querySelector("body");
const imgButton = document.querySelector(".img-button");

toggleTheme.addEventListener("click", () => {
    const themeDarkActive = body.classList.contains("theme-dark");

    body.classList.toggle("theme-dark");

    if (themeDarkActive) {
        imgButton.setAttribute("src", "/src/img/sun.png");
    } else {
        imgButton.setAttribute("src", "/src/img/moon.png");
    };
});