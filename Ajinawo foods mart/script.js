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

const revealTargets = document.querySelectorAll(
    ".service-card, .product-card, .about-image, .about, .contact form"
);
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if ("IntersectionObserver" in window && !prefersReducedMotion) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px"
    });

    revealTargets.forEach((target) => {
        target.classList.add("reveal");
        revealObserver.observe(target);
    });
    document.body.classList.add("motion-ready");
}