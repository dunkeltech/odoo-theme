/** @odoo-module **/

document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.toggle("sidebar-collapsed");
    const observer = new MutationObserver(() => {
        const menuBtn = document.querySelector(".o_navbar_apps_menu > button:nth-child(1)");

        if (menuBtn && !document.getElementById("customSidebarToggle")) {
            // Original entfernen
            menuBtn.remove();

            // Neuen Button erstellen
            const newBtn = document.createElement("button");
            newBtn.id = "customSidebarToggle";
            newBtn.className = "o-dropdown dropdown-toggle dropdown";
            newBtn.innerHTML = `<i class="oi oi-apps"></i>`;
            newBtn.style.marginRight = "8px";

            newBtn.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopImmediatePropagation();
                // document.querySelector(".o_action_manager")?.classList.toggle("sidebar-collapsed");
                document.body.classList.toggle("sidebar-collapsed");
            });

            // An gleicher Stelle einfügen
            const container = document.querySelector(".o_navbar_apps_menu");
            container?.prepend(newBtn);
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
});
