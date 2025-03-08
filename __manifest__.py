# -*- coding: utf-8 -*-
{
    'name': "refund_auth",

    'summary': """
        a security measure in the Odoo Point of Sale (POS) module to ensure that only managers can authorize refunds.
         The system will prompt for a password before processing any refund, with the password stored in the employee profile.""",

    'author': "Abdelfattah Mohamed",
    'website': "https://abdelfattaah.github.io/",

    'category': 'Uncategorized',
    'version': '0.1',

    'depends': ['base','point_of_sale','hr'],

    'data': [
        'views/views.xml',
    ],

    'assets': {
        'point_of_sale.assets': [
            'refund_auth/static/src/js/refund_auth.js',
            'refund_auth/static/src/js/RefundAuthPopup.js',
            'refund_auth/static/src/xml/RefundAuthPopup.xml',

        ],
    },

    'application': True,
}
