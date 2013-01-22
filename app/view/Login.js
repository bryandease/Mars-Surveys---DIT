Ext.define('DIT.view.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'logincard',
    id: 'loginform',

    requires: ['Ext.form.FieldSet'],

    config: {
        scrollable: false,
        items: [{
            xtype: 'fieldset',
            title: 'Please enter your 5+3 below',
            style: {
                width: '300px',
                fontSize: '120%'
            },
            items: [{
                xtype: 'textfield',
                name: 'fivethree',
                height: 60,
                style: {
                    fontSize: '155%'
                }
            }]
        }, {
            action: 'login',
            xtype: 'button',
            ui: 'confirm',
            text: 'Continue',
            width: 300,
            height: 50,
            style: {
                fontSize: '130%'
            }
        }]
    }
});