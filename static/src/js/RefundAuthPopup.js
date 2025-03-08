odoo.define('refund_auth.RefundAuthPopup', function(require) {
    'use strict';

    const AbstractAwaitablePopup = require('point_of_sale.AbstractAwaitablePopup');
    const Registries = require('point_of_sale.Registries');
    const { _lt } = require('@web/core/l10n/translation');

    const { onMounted, useRef, useState } = owl;

    class RefundAuthPopup extends AbstractAwaitablePopup {
        setup() {
            super.setup();
            this.state = useState({ inputValue: this.props.startingValue || '' });
            this.inputRef = useRef('input');
            onMounted(this.onMounted);
        }
        onMounted() {
            this.inputRef.el.focus();
        }
        getPayload() {
            return this.state.inputValue;
        }
    }

    RefundAuthPopup.template = 'RefundAuthPopup';
    RefundAuthPopup.defaultProps = {
        confirmText: _lt('Confirm'),
        cancelText: _lt('Cancel'),
        title: _lt('Refund Authorization'),
        body: _lt('Enter your refund authorization password:'),
        startingValue: '',
        placeholder: 'Enter password',
    };

    Registries.Component.add(RefundAuthPopup);

    return RefundAuthPopup;
});
