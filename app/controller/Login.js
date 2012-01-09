Ext.define('app.controller.Login', {
    extend: 'Ext.app.Controller',

    config : {
    },
    
    views  : [
        'Login'            
    ],   

    stores : [
    ],

    refs   : [
        {
            ref         : 'login',
            selector    : 'loginview',
            autoCreate  : true,
            xtype       : 'loginview'
        },
        {
            ref         : 'signup',
            selector    : 'signupview',
            autoCreate  : true,
            xtype       : 'signupview'
        }
    ],

    init: function() {        
        this.getLoginView().create();
        this.control({
            '#btnLogin': {
                tap: this.onLoginButtonTap
            },            
            '#btnForgotPassword': {
                tap: this.onForgotPasswordButtonTap
            },
            '#btnSignup': {
                tap: this.onSignupButtonTap
            }
        });
    },

    onLoginButtonTap: function() {
        console.log('login');
        alert('login');
        Ext.Ajax.request({
            // RESTful or Ajax Service for Login 
            // COMMUNITY INPUT: Call for various Language/DB Server examples:            
            // (node/ruby/php/c#/couch/mongo/MySQL/wtf...)
            url         : 'http://senchatouch2.firstfreight.com/ajax.aspx',
            params      : {'fn': 1},
            waitMsg     : 'Confirming Your Login...',            
            scope       : this,
            callback    : this.onLoginResult
        });
    },  

    onLoginResult: function(request, success, response) {
        console.log('login result callback')
    },

    onForgotPasswordButtonTap: function() {
        alert('forgot password');
        console.log('forgot password');        
    },   
    
    onSignupButtonTap: function() {
        alert('signup');
        Ext.dispatch({
            controller : app.controllers.Signup,
            action     : 'init',
            animation  : {type:'pop'}
        });        
        console.log('signup');        
    }  
});
