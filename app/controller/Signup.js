Ext.define('app.controller.Signup', {
    extend: 'Ext.app.Controller',

    config : {
    },
    
    views  : [
        'Signup'    
    ],   

    stores : [
    ],

    refs   : [
        {
            ref         : 'signup',
            selector    : 'signupview',
            autoCreate  : true,
            xtype       : 'signupview'
        }
    ],

    init: function() {        
        this.getSignupView().create();
        this.control({
            '#btnSignup': {
                tap: this.onSignupButtonTap
            },            
            '#btnBack': {
                tap: this.onBackButtonTap
            },
        });
    },

    onSignupButtonTap: function() {
        console.log('signup');
        alert('signup');
        Ext.Ajax.request({
            // RESTful or Ajax Service for Login            
            url         : 'http://senchatouch2.firstfreight.com/ajax.aspx',
            params      : {'fn': 1},
            waitMsg     : 'Processing your signup request...',            
            scope       : this,
            callback    : this.onSignupResult
        });
    },  

    onSignupResult: function(request, success, response) {
        console.log('signup result callback')
    },

    onBackButtonTap: function() {
        alert('back');
        console.log('back');        
    }    
});
