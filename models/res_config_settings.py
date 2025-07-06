from odoo import fields, models, api

class ResConfigSettings(models.TransientModel):
    _inherit = 'res.config.settings'

    app_order = fields.Char(string="App Order", config_parameter='dunkel_tech_backend_theme.app_order')
    app_list_display = fields.Text(string="Available Apps", compute='_compute_app_list_display', readonly=True)

    @api.depends('app_order')
    def _compute_app_list_display(self):
        menus = self.env['ir.ui.menu'].search([('parent_id', '=', False)])
        lines = []
        for menu in menus:
            lines.append(f"{menu.name} (ID: {menu.id})")
        for record in self:
            record.app_list_display = "\n".join(lines)