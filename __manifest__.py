{
    "name": "dunkelTech Backend Theme",
    "version": "18.0.3.0.0",
    "author": "dunkel.tech",
    "depends": ["web"],
    "assets": {
        "web._assets_primary_variables": [
            ("prepend", "dunkel_tech_backend_theme/static/src/scss/variables.scss")
        ],
        "web.assets_backend": [
            "dunkel_tech_backend_theme/static/src/scss/tabs.scss",
            "dunkel_tech_backend_theme/static/src/scss/components/navbar.scss",
            "dunkel_tech_backend_theme/static/src/scss/components/sidebar.scss",
            (
                "after",
                "web/static/src/webclient/webclient.js",
                "dunkel_tech_backend_theme/static/src/js/replace_home_button.js",
            ),
            (
                "after",
                "web/static/src/webclient/webclient.js",
                "dunkel_tech_backend_theme/static/src/js/services/app_menu.js",
            ),
            (
                "after",
                "web/static/src/webclient/webclient.js",
                "dunkel_tech_backend_theme/static/src/js/sidebar_component.js",
            ),
            (
                "after",
                "web/static/src/webclient/webclient.xml",
                "dunkel_tech_backend_theme/static/src/js/sidebar_component.xml",
            ),
            "dunkel_tech_backend_theme/static/src/xml/sidebar_injection.xml",
            # "dunkel_tech_backend_theme/static/src/xml/sidebar_injection_header.xml",

        ]

    },
    "license": "LGPL-3",
    "installable": True,
    "application": False
}
