/** @odoo-module **/

import { patch } from "@web/core/utils/patch";
import { WebClient } from "@web/webclient/webclient";
import { Component, useState, onWillStart, onMounted, onWillUnmount } from "@odoo/owl";
import { useService } from '@web/core/utils/hooks';

export class Sidebar extends Component {
    static template = "dunkel_tech_backend_theme.Sidebar";

    setup() {
        this.appMenu = useService("app_menu");

        this.state = useState({
            apps: this.appMenu.getApps(),
            currentApp: null,
        });

        onWillStart(async () => {
            this.state.apps = await this.appMenu.getApps();
            this.state.currentApp = this.appMenu.getCurrentApp();
        });

        onMounted(() => {
            this.env.bus.addEventListener("MENUS:APP-CHANGED", (ev) => this.onAppChanged(ev));
        });

        onWillUnmount(() => {
            this.env.bus.removeEventListener("MENUS:APP-CHANGED", this.onAppChanged);
        });
    }

    onAppChanged(event) {
        if(!this.appMenu) {
            return;
        }
        this.state.currentApp = this.appMenu.getCurrentApp();
        document.body.classList.add('sidebar-collapsed');
    }

    toggleSidebar() {
        document.body.classList.toggle("sidebar-collapsed");
    }

}

Sidebar.template = "dunkel_tech_backend_theme.Sidebar";

// Patch WebClient → Sidebar + neue toggleSidebar-Funktion
patch(WebClient, {
    components: {
        ...WebClient.components,
        Sidebar,
    },
});
