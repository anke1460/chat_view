Ext.define('JiaoYou.controller.Signup', {
    extend: 'Ext.app.Controller',
    config: {
    },
    
    views: [
        'Signup'    
    ],   

    stores: [
    ],

    refs: [
        {
            ref         : 'signup',
            selector    : 'signupview'
        },
        {
            ref         : 'login',
            selector    : 'loginview'
        }
    ],

    init: function() {
      //  this.getSignupView().create();
        this.control({
            '#signup_save': {
                tap: this.onSignupButtonTap
            },            
            '#signup_back': {
                tap: this.onBackButtonTap
            },
        });
    },

    onSignupButtonTap: function() {
      Ext.Msg.alert('消息', '邮件已发，请先激活', function(){
        Ext.Viewport.setActiveItem(this.getLogin());   
      }, this);
        
      /*
        Ext.Ajax.request({
            // RESTful or Ajax Service for Login            
            url         : 'http://senchatouch2.firstfreight.com/ajax.aspx',
            params      : {'fn': 1},
            waitMsg     : 'Processing your signup request...',            
            scope       : this,
            callback    : this.onSignupResult
        });
      */
    },  

    onSignupResult: function(request, success, response) {
        console.log('signup result callback')
    },

    onBackButtonTap: function() {
       Ext.Viewport.setActiveItem(this.getLogin());     
    }    
});
