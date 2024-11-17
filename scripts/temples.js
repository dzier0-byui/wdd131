const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastmodified").textContent = lastModified;

function toggleMenu() {
    var nav = document.querySelector('.topnav');
    var links = document.getElementById("myLinks");

    nav.classList.toggle("open");

    if (links.style.display === "block") {
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }
}