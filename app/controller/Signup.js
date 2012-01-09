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
            // COMMUNITY INPUT: Call for various Language/DB Server examples:            
            // (node/ruby/php/c#/couch/mongo/MySQL/wtf...)
            url         : 'http://senchatouch2.firstfreight.com/ajax.aspx',
            params      : {'fn': 1},
            waitMsg     : 'Processing you signup request...',            
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
