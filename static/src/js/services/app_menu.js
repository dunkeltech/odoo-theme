/** @odoo-module **/

import { registry } from "@web/core/registry";
import { computeAppsAndMenuItems } from "@web/webclient/menus/menu_helpers";

export const appMenuService = {
    dependencies: ["menu"],
    async start(env, { menu }) {
        // Abrufen der App-Reihenfolge via RPC
        const response = await fetch('/dunkeltech_theme/get_app_order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            },
            body: JSON.stringify({}),
        });

        const app_order = await response.json();
        const appOrder = app_order.result.app_order || [];

        return {
            getCurrentApp () {
                return menu.getCurrentApp() || {};
            },
            getApps() {
                const { apps } = computeAppsAndMenuItems(menu.getMenuAsTree('root'));

                // Sortieren nach geladener Reihenfolge
                apps.sort((a, b) => {
                    const indexA = appOrder.indexOf(a.id);
                    const indexB = appOrder.indexOf(b.id);

                    const aInOrder = indexA !== -1;
                    const bInOrder = indexB !== -1;

                    if (aInOrder && bInOrder) {
                        return indexA - indexB;
                    } else if (aInOrder) {
                        return -1;
                    } else if (bInOrder) {
                        return 1;
                    } else {
                        return a.label.localeCompare(b.label); // optional fallback
                    }
                });

                return apps;
            },
            selectApp(app) {
                menu.selectMenu(app);
            }
        };
    },
};

registry.category("services").add("app_menu", appMenuService);
