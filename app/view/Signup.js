Ext.define('app.view.Signup', {
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
                id: 'signupTitleBar',
                xtype  : 'titlebar',
                docked : 'top',
                ui     : 'light',
                title  : 'Signup for Account'            
            }, {                
                id     : 'signupview',
                xtype  : 'fieldset',                            
                items  : [
                    {
                        xtype       : 'emailfield',
                        placeHolder : 'you@yourcompany.com',
                        name        : 'firstname',
                        id          : 'firstname',
                        required    : true,
                    }, 
                    {
                        xtype       : 'passwordfield',
                        placeHolder : 'Password',
                        name        : 'Password',
                        required    : true
                    }, 
                    {   
                        xtype       : 'textfield',
                        placeHolder : 'firstname',
                        name        : 'firstname',
                        required    : true
                    }, 
                    {    
                        xtype       : 'textfield',
                        placeHolder : 'lastname',
                        name        : 'lastname',
                        required    : true
                    },
                    {
                        xtype: 'selectfield',
                        name : 'rank',
                        label: 'Rank',
                        options: [
                            {
                                text : 'English',
                                value: 'en'
                            },
                            {
                                text : 'Chinese',
                                value: 'zh_CN'
                            }
                        ]
                    }
                ]                                          
            }, {            
                id: 'signupBottomNavBar',
                xtype  : 'toolbar',
                docked : 'bottom',                
                items  : [
                    {
                        xtype   : 'button',
                        text    : 'Back',
                        ui      : 'back',                        
                        scope   : this
                    }, {
                        xtype   : 'spacer'
                    }, {
                        xtype   : 'button',
                        id      : 'btnSignup',
                        text    : 'Signup',
                        ui      : 'confirm'                         
                    }
                ]            
            }
        ]                
    }
});
        
