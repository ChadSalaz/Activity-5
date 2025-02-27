// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;
    const navbar = document.getElementById("navbar");
    const footer = document.getElementById("footer");

    // Check local storage for dark mode preference
    if (localStorage.getItem("dark-mode") === "enabled") {
        enableDarkMode();
    }

    darkModeToggle.addEventListener("click", function () {
        if (body.classList.contains("dark-mode")) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    function enableDarkMode() {
        body.classList.add("dark-mode");
        navbar.classList.replace("bg-light", "bg-dark");
        navbar.classList.replace("navbar-light", "navbar-dark");
        footer.classList.replace("bg-light", "bg-dark");
        footer.classList.replace("text-dark", "text-light");
        localStorage.setItem("dark-mode", "enabled");
    }

    function disableDarkMode() {
        body.classList.remove("dark-mode");
        navbar.classList.replace("bg-dark", "bg-light");
        navbar.classList.replace("navbar-dark", "navbar-light");
        footer.classList.replace("bg-dark", "bg-light");
        footer.classList.replace("text-light", "text-dark");
        localStorage.setItem("dark-mode", "disabled");
    }
});
