function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

window.addEventListener("DOMContentLoaded", () => {
    if (window.location.hash) {
        const targetSection = document.querySelector(window.location.hash);
        if (targetSection) {
            setTimeout(() => {
                targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 100);
        }
    } else {
        const currentSection = document.querySelector("section");
        if (currentSection && !window.location.pathname.endsWith("index.html") && window.location.pathname !== "/") {
            setTimeout(() => {
                currentSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 100);
        }
    }
});