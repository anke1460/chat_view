Ext.define('app.view.Login', {
    extend: 'Ext.Container',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        fullscreen : true,
        layout     : {
            type      : 'card',
            animation : {
                type      : 'slide',
                direction : 'left',
                duration  : 250
            }
        },
        items: [
            {
                id: 'loginTitleBar',
                xtype  : 'titlebar',
                docked : 'top',
                ui     : 'light',
                title  : 'Sencha Touch 2.0 Login'            
            }, {
                id     : 'loginview',
                xtype  : 'fieldset',                            
                items  : [ 
                    {
                        xtype       : 'emailfield',
                        placeHolder : 'you@yourcompany.com',
                        name        : 'Username',
                        label       : 'Email',
                        id          : 'Username',
                        required    : true,
                    }, {
                        xtype       : 'passwordfield',
                        placeHolder : 'Password',
                        name        : 'Password',
                        label        : 'Password',                        
                        required    : true
                    }, {   
                        xtype       : 'checkboxfield',
                        id          : 'RememberMe',
                        name        : 'RememberMe',
                        label       : 'Keep me logged in?',
                        labelWidth  : '80%'                
                    }
                ]            
            }, {            
                id: 'loginBottomNavBar',
                xtype  : 'toolbar',
                docked : 'bottom',                
                items  : [
                    {
                        xtype   : 'button',
                        id      : 'btnSignup',
                        text    : 'Sign Up',
                        ui      : 'back'                        
                    }, {
                        xtype   : 'spacer'
                    }, {
                        xtype   : 'button',
                        id      : 'btnLogin',
                        text    : 'Login',
                        ui      : 'confirm'     
                    }, {
                        xtype   : 'spacer'                    
                    }, {                
                        xtype   : 'button',
                        id      : 'btnForgotPassword',
                        text    : 'Forgot Password',   
                        ui      : 'forward'                                                                                    
                    }
                ]            
            },            
        ]
    }
});
