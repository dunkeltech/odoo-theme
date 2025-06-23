/** @odoo-module **/


import { registry } from "@web/core/registry";
import { computeAppsAndMenuItems, reorderApps } from "@web/webclient/menus/menu_helpers";

export const appMenuService = {
    dependencies: ["menu"],
    async start(env, { menu }) {
        return {
        	getCurrentApp () {
        		return menu.getCurrentApp() || {};
        	},
            getApps() {
                const { apps } = computeAppsAndMenuItems(
					menu.getMenuAsTree('root')
				);
                return apps;
            },
			selectApp(app) {
				menu.selectMenu(app);
			},
            getAppsWithMenus() {
                const { apps, menuItems } = computeAppsAndMenuItems(menu.getMenuAsTree('root'));
                console.log("Apps:", apps);
                console.log("Menu Items:", menuItems);
                // Menüeinträge den jeweiligen App-IDs zuordnen
                const appMap = {};
                for (const app of apps) {
                    appMap[app.id] = {
                        ...app,
                        children: menuItems.filter((item) => item.menuID === app.id),
                    };
                }

                console.log("Apps with Menus:", appMap);

                return Object.values(appMap);
            }
        };
    },
};

registry.category("services").add("app_menu", appMenuService);
