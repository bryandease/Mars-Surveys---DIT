Ext.define('DIT.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            mainpanel: 'mainpanel',
            loginform: '#loginform',
            thoughts: '#final_thoughts'
        },
        control: {
            'button[action="login"]': {
                tap: 'goLogin'
            },
            'button[action="firstquestion"]': {
                tap: 'firstQuestion'
            },
            'button[action="complete"]': {
                tap: 'sendAnswers'
            },
            'button[action="restartapp"]': {
                tap: 'restartApp'
            }
        }
    },

    goLogin: function () {
        Ext.Viewport.setMasked({
            xtype: 'loadmask',
            message: 'Logging in...'
        });
        
        var form = this.getLoginform();
        var mainPanel = this.getMainpanel();

        var dh = Ext.DomHelper;
        
        form.submit({
            url: 'http://marketreadytools.com/mars_survey/main/log_in',
            method: 'POST',
            success: function (form, result) {
                Ext.Viewport.unmask();
                Ext.get('username').setHtml(result.name);
                document.getElementById('five_three').value=result.five_three;
                mainPanel.animateActiveItem(1, {type: 'slide', direction: 'left'});
            },
            failure: function () {
                Ext.Viewport.unmask();
                Ext.Msg.alert('Oops! Invalid log in', 'Please try your 5+3 again');
            }
        });
    },

    firstQuestion: function()
    {
        var mainPanel = this.getMainpanel();
        mainPanel.animateActiveItem(2, {type: 'slide', direction: 'left'});
    },

    sendRequest: function(question, answer, userID)
    {
        Ext.Ajax.request({
            url: 'http://marketreadytools.com/mars_survey/main/save_answers',
            params: {
                associate_id: userID,
                question_id: question,
                answer: answer,
                ipad: 3
            },
            success: function(response){
                var text = response.responseText;
            }
        });
    },

    sendAnswers: function()
    {
        Ext.Viewport.setMasked({
            xtype: 'loadmask',
            message: 'Saving Answers...'
        });

        var mainPanel = this.getMainpanel();
        var userID = document.getElementById('five_three').value;

        var thoughts = this.getThoughts().getValue();

        if (thoughts.length)
        {
            this.sendRequest('question_1', thoughts, userID);
        }

        setTimeout(function()
        {
            Ext.Viewport.unmask();
            mainPanel.animateActiveItem(7, {type: 'slide', direction: 'left'});
        }, 3000);
    },

    restartApp: function()
    {
        location.reload();
    }
});