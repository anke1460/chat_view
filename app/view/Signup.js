Ext.define('JiaoYou.view.Signup', {
    extend: 'Ext.form.Panel',
    xtype: 'signup',
    config: {
        fullscreen : true,
        items: [
            {
                xtype  : 'titlebar',
                docked : 'top',
                ui     : 'light',
                title  : '注册'            
            }, 
            {                
                xtype  : 'fieldset',
                height : 250,
                cls    : 'loginview',
                instructions: '激活邮箱，即可登录',
                items  : [
                    {
                        xtype       : 'emailfield',
                        name        : 'name',
                        label       :'邮箱',
                        required    : true
                    },
                    {   
                        xtype       : 'textfield',
                        name        : 'name',
                        label       : '昵称',
                        required    : true
                    }, 
                    {
                        xtype       : 'passwordfield',
                        name        : 'Password',
                        label       : '密码',
                        required    : true
                    }, 
                    {    
                        xtype       : 'selectfield',
                        label       : '性别',
                        name        : 'sex',
                        required    : true,
                        options: [
                            {
                                text : '男',
                                value: 'man'
                            },
                            {
                                text : '女',
                                value: 'female'
                            }
                        ]
                    }
                ]                                          
            }, 
            {            
                id: 'signupBottomNavBar',
                xtype  : 'toolbar',
                docked : 'bottom',                
                items  : [
                    {
                        xtype   : 'button',
                        text    : '返回',
                        id      : 'signup_back',
                        ui      : 'back'
                    }, 
                    {
                        xtype   : 'spacer'
                    }, 
                    {
                        xtype   : 'button',
                        id      : 'signup_save',
                        text    : '保存',
                        ui      : 'confirm'                         
                    }
                ]            
            }
        ]                
    }
});
        