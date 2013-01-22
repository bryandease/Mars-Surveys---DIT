Ext.define('DIT.view.Thoughts', {
    extend: 'Ext.Panel',
    xtype: 'thoughts',

    requires: [
        'DIT.view.Thoughtsform'
    ],

    config: {
        fullscreen: true,
        padding: 4,
        items: [{
            html: '<img class="survey_logo" src="touch/resources/images/do-it-together-circle.png"><h1>Question 1:</h1><p class="question_text">Tell us what you think! Provide open feedback or tell us “What does engagement mean to you?”</p>',
            style: {
                height: '130px'
            }
        },
        {
            xtype: 'thoughtsform',
            style: {
                position: 'relative',
                top: '85px',
                height: '500px'
            }
        }]
    }
});