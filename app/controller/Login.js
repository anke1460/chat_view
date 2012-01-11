Ext.define('JiaoYou.controller.Login', {
    extend: 'Ext.app.Controller',

    config : {
    },
    
    views  : [
        'Login'            
    ],   

    stores : [
    ],

    refs: [
        {
            ref         : 'login',
            selector    : 'login'
        },
        {
            ref         : 'signup',
            selector    : 'signup'
        },
        {   ref         : 'forgotPassword',
            selector    : 'forgot_password'
        },
        {
            ref         : 'clientInterface',
            selector    : 'client_interface'
        }
    ],

    init: function() {
       // console.log(this)
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
            },
            '#forgot_password_back' :
            {
                tap: this.onForgotPasswordBackTap
            }
        });
    },

    onLoginButtonTap: function() {
        console.log(this.getLogin())
        console.log(this.getLogin().getValues())
        var clientInterface = this.getClientInterface() || Ext.create('JiaoYou.view.ClientInterface');
        Ext.Viewport.setActiveItem(clientInterface);
        /*
        Ext.Ajax.request({
            url         : 'http://senchatouch2.firstfreight.com/ajax.aspx',
            params      : {'fn': 1},
            waitMsg     : 'Confirming Your Login...',            
            scope       : this,
            callback    : this.onLoginResult
        });
        */
    },  

    onLoginResult: function(request, success, response) {
        console.log('login result callback')
    },

    onForgotPasswordButtonTap: function() {
      var forgot_password = this.getForgotPassword() || Ext.create('JiaoYou.view.ForgotPassword');
      Ext.Viewport.setActiveItem(forgot_password);     
    },   
    
    onSignupButtonTap: function() {
      var signup = this.getSignup() || Ext.create('JiaoYou.view.Signup');
      Ext.Viewport.setActiveItem(signup);
    },
    
    onForgotPasswordBackTap: function() {
        console.log('back')
        Ext.Viewport.setActiveItem(this.getLogin());
    }
});
