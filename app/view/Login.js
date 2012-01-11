Ext.define('JiaoYou.view.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'login',
    config: {
        fullscreen : true,
        items: [
            {
                id: 'loginTitleBar',
                xtype  : 'titlebar',
                docked : 'top',
                ui     : 'light',
                title  : '找朋友，快去看看吧！'            
            }, 
            {
                cls     : 'loginview',
                xtype  : 'fieldset',
                height: 200,
                instructions: '同城交友网，玩转同城',
                items  : [ 
                    {
                        xtype       : 'emailfield',
                        name        : 'Username',
                        label       : '邮箱',
                        id          : 'Username',
                        required    : true
                    }, 
                    {
                        xtype       : 'passwordfield',
                        name        : 'Password',
                        label       : '密码',                        
                        required    : true
                    }, 
                    {   
                        xtype       : 'checkboxfield',
                        id          : 'RememberMe',
                        name        : 'RememberMe',
                        label       : '记住密码?',
                        labelWidth  : '70%'                
                    }
                ]            
            }, 
            {            
                id: 'loginBottomNavBar',
                xtype  : 'toolbar',
                docked : 'bottom',                
                items  : [
                    {
                        xtype   : 'button',
                        id      : 'btnSignup',
                        text    : '立即注册',
                        ui      : 'back'                        
                    }, 
                    {
                        xtype   : 'spacer'
                    }, 
                    {
                        xtype   : 'button',
                        id      : 'btnLogin',
                        text    : '登录',
                        ui      : 'confirm'     
                    }, 
                    {
                        xtype   : 'spacer'                    
                    }, 
                    {                
                        xtype   : 'button',
                        id      : 'btnForgotPassword',
                        text    : '忘记密码',   
                        ui      : 'forward'                                                                                    
                    }
                ]            
            },            
        ]
    }
});
