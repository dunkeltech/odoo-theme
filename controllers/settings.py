from odoo import http
from odoo.http import request

class SidebarSettingsController(http.Controller):

    @http.route('/dunkeltech_theme/get_app_order', type='json', auth='user')
    def get_app_order(self):
        value = request.env['ir.config_parameter'].sudo().get_param('dunkel_tech_backend_theme.app_order', '')
        return {
            'app_order': [int(x.strip()) for x in value.split(',') if x.strip().isdigit()]
        }
