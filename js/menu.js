function activarMenu() {
    const toggleBtn = document.getElementById("menu-toggle");
    const sideMenu = document.getElementById("side-menu");

    sideMenu.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("menu-toggle").addEventListener("click", activarMenu);
});
