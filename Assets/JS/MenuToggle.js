document.getElementById("toggleMenu").addEventListener("click", function () {
    const menu = document.getElementById("menuContainer");
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
});
