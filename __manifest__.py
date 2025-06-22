{
    "name": "dunkelTech Backend Theme",
    "version": "18.0.1.0.2",
    "author": "dunkel.tech",
    "depends": ["web"],
    "assets": {
        "web._assets_primary_variables": [
            ("prepend", "dunkel_tech_backend_theme/static/src/scss/variables.scss"),
        ],
        "web.assets_backend": [
            "dunkel_tech_backend_theme/static/src/js/persistent_app_list.js",
            "dunkel_tech_backend_theme/static/src/scss/components/navbar.scss",
            "dunkel_tech_backend_theme/static/src/scss/components/sidebar.scss",
        ],
    },
    "license": "LGPL-3",
    "installable": True,
    "application": False,
}
