Ext.define('DIT.view.Instructions', {
    extend: 'Ext.Panel',
    xtype: 'instructions',

    config: {
        fullscreen: true,
        cls: 'wooden',
        padding: 4,
        defaults: {
            margin: 5
        },
        items: [{
            html: '<img class="survey_logo" src="touch/resources/images/do-it-together-circle.png"> <p class="intro_text">Welcome, <span id="username"></span>, to the "Do It Together" interactive survey. Click the button below to give your feedback.</p><input type="hidden" id="five_three" value="">',
            style: {
                height: '100px'
            }
        }, {
            action: 'firstquestion',
            xtype: 'button',
            ui: 'confirm',
            text: 'Continue',
            width: 300,
            height: 50,
            style: {
                fontSize: '130%'
            },
            centered: true
        }]
    }
});