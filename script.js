const menuBtn = document.getElementById("menu-btn")
const navLinks = document.getElementById("nav-links")
const menuBtnIcon = menuBtn.querySelector("i")

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open")

    const isOpen = navLinks.classList.contains("open")
    menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-2-line"
    )
})    

navLinks.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === "a") {
        navLinks.classList.remove("open");
        menuBtnIcon.setAttribute("class", "ri-menu-2-line");
    }
});