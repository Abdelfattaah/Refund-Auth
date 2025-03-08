# -*- coding: utf-8 -*-

from odoo import models, fields, api


class refund_auth_employee(models.Model):
    _inherit = 'hr.employee'

    refund_auth_pass = fields.Char(string='Refund Auth Password')

    @api.model
    def verify_refund_password(self, user_id, password):
        employee = self.env['hr.employee'].sudo().search([('user_id', '=', user_id)], limit=1)
        if employee and employee.refund_auth_pass == password:
            return {'success': True}
        return {'success': False}
