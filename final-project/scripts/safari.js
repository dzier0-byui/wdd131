document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});

document.querySelector("footer p").innerHTML = `&copy; ${new Date().getFullYear()} Exploring the African Safari. All rights reserved. - Cody Dzierzon`;
