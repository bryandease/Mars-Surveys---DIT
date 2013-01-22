Ext.define('DIT.view.Thoughtsform', {
    extend: 'Ext.form.Panel',
    xtype: 'thoughtsform',

    requires: ['Ext.form.FieldSet'],

    config: {
        scrollable: false,
        style: {
            marginTop: '150px'
        },
        items: [{
            xtype: 'fieldset',
            style: {
                width: '600px',
                fontSize: '120%',
                margin: '30px auto 0 auto'
            },
            items: [{
                id: 'final_thoughts',
                xtype: 'textareafield',
                name: 'final_thoughts',
                height: 260,
                style: {
                    fontSize: '155%'
                }
            }]
        }, {
            id: 'completer',
            action: 'complete',
            xtype: 'button',
            ui: 'confirm',
            text: 'Complete',
            width: 300,
            height: 50,
            style: {
                fontSize: '130%'
            }
        }]
    }
});