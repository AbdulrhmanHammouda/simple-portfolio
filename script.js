document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("themeToggleSwitch");
    const body = document.body;

    // Load theme preference from localStorage
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-theme");
        themeToggle.checked = true;
    }

    themeToggle.addEventListener("change", function () {
        if (this.checked) {
            body.classList.add("dark-theme");
            localStorage.setItem("theme", "dark");
        } else {
            body.classList.remove("dark-theme");
            localStorage.setItem("theme", "light");
        }
    });
});
