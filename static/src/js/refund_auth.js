odoo.define('refund_auth.RefundButton', function (require) {
    'use strict';

    const RefundButton = require('point_of_sale.RefundButton');
    const Registries = require('point_of_sale.Registries');
    const rpc = require('web.rpc');

    const AuthRefundButton = (RefundButton) =>
        class extends RefundButton {
            setup() {
                super.setup();
            }

            async _onClick() {

                const employee = this.env.pos.get_cashier();

                const password = await this.showPopup('RefundAuthPopup', {
                    title: 'Refund Authorization',
                    body: 'Enter the refund authorization password:',
                    confirmText: 'Confirm',
                    cancelText: 'Cancel',
                    inputType: 'password',
                });

                if (!password.confirmed) return;

                const isAuthorized = await rpc.query({
                    model: 'hr.employee',
                    method: 'verify_refund_password',
                    args: [employee.id, password.payload],
                });

                if (!isAuthorized.success) {
                    this.showPopup('ErrorPopup', {
                        title: 'Invalid Password',
                        body: 'The refund authorization password is incorrect.',
                    });
                    return;
                }

                super._onClick();
            }
        };

    Registries.Component.extend(RefundButton, AuthRefundButton);
});
