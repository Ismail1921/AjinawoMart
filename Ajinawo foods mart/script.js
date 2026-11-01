document.getElementById("year").textContent = new Date().getFullYear();
const nav = document.getElementById("nav");
const icon = document.getElementById("icon");
const ul = document.getElementById("ul");

const setMenuOpen = (isOpen) => {
    nav.classList.toggle("hide", !isOpen);
    icon.setAttribute("aria-expanded", String(isOpen));
};

icon.addEventListener("click", () => {
    setMenuOpen(nav.classList.contains("hide"));
});

ul.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
        setMenuOpen(false);
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        setMenuOpen(false);
    }
});