Ext.define('SenchaMobileLogin.controller.Login', {
    extend: 'Ext.app.Controller',

    config: {
    },
    
    views : [
        'Login'    
    ],   

    stores: [
    ],

    refs: [
        {
            ref         : 'login',
            selector    : 'loginview',
            autoCreate  : true,
            xtype       : 'loginview'
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
        });
    },

    onLoginButtonTap: function() {
        console.log('login');
        alert('login');
        Ext.Ajax.request({
            //Rest or Ajax Service for Login
            url         : 'http://senchatouch2.firstfreight.com/ajax.aspx?fn=2',            
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
    }
    
});
