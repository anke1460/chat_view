Ext.define('SenchaMobileLogin.view.Login', {
    extend: 'Ext.Container',
    requires: [
        'Ext.TitleBar',
        'Ext.form.FormPanel',
    ],
    config: {
        fullscreen: true,
        layout    : {
            type: 'card',
            animation: {
                type: 'slide',
                direction: 'left',
                duration: 250
            }
        },
        items: [
            {
                id: 'loginTitleBar',
                xtype : 'titlebar',
                docked: 'top',
                ui: 'light',
                title : 'Mobile Login'            
            },            
            {
                id: 'loginview',
                xtype: 'fieldset',                            
                items: [
                    {
                        xtype: 'emailfield',
                        placeHolder: 'Username',
                        name: 'Username',
                        id: 'Username',
                        required: true,
                    }, 
                    {
                        xtype: 'passwordfield',
                        placeHolder: 'Password',
                        name: 'Password',
                        required: true
                    },
                    {   
                        xtype: 'checkboxfield',
                        id: 'RememberMe',
                        name: 'RememberMe',
                        label: 'Keep me logged in?',
                        labelWidth: '80%'                
                    }
                ]
            },
            {
                id: 'loginBottomNavBar',
                xtype : 'toolbar',
                docked: 'bottom',
                title : '',
                items: [
                    {
                        xtype: 'button',
                        id: 'btnForgotPassword',
                        text: 'Forgot Password',   
                        ui: 'action'                        
                    }, 
                    {xtype: 'spacer'},                   
                    {
                        xtype: 'button',
                        id: 'btnLogin',
                        text: 'Login',
                        ui: 'confirm',                                                   
                        align: 'right'                                            
                    }
                ]            
            },            
        ]
    }
});
