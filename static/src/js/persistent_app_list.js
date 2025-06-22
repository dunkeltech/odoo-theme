/** @odoo-module **/

document.addEventListener("DOMContentLoaded", function () {
    const interval = setInterval(() => {
        const menu = document.querySelector(".o_app.o_home_menu");
        if (menu) {
            menu.classList.add("d-block");
            menu.style.display = "block";
            console.log("App-Menü dauerhaft eingeblendet");
            clearInterval(interval);
        }
    }, 300);
});
