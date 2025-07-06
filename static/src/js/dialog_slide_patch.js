/** @odoo-module **/

document.addEventListener("DOMContentLoaded", function () {
    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            for (const node of mutation.addedNodes) {
                if (node instanceof HTMLElement && node.classList.contains("o_dialog")) {
                    // Nur neue Dialoge bearbeiten, die noch nicht gepatcht sind
                    if (!node.classList.contains("o_slide_dialog")) {
                        node.classList.add("o_slide_dialog");

                        if (!node.classList.contains("show")) {
                            setTimeout(() => {
                                node.classList.add("show");
                            }, 10);
                        }

                    }
                }
            }
        }
    });

    setTimeout(() => {
        observer.observe(document.getElementsByClassName("o-overlay-container")[0], {
            childList: true,
            subtree: true,
        });
    }, 100);
});
