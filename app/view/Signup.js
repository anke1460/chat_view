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
        items: 
            [{                
                id     : 'signupview',
                xtype  : 'fieldset',                            
                items  : 
                    [{
                        xtype       : 'emailfield',
                        placeHolder : 'you@yourcompany.com',
                        name        : 'firstname',
                        id          : 'firstname',
                        required    : true,
                    }, {
                        xtype       : 'passwordfield',
                        placeHolder : 'Password',
                        name        : 'Password',
                        required    : true
                    }, {   


        this.lastNameField = new Ext.form.Text({
            required: true,
            label: feyaSoft.touch.lang.common['lastname'],
            useClearIcon: true
        });
        this.langField = new Ext.form.Select({
            name: 'language',
            label: FTLANG.common['language'],
            labelWidth: '40%',
            options: [
                {value:'en', text:feyaSoft.touch.lang.lang['en']},
                {value:'zh_CN', text:feyaSoft.touch.lang.lang['zh_CN']}
            ],
            required: true
        });

        this.nameSet = new Ext.form.FieldSet({
            defaults: {
                labelAlign: 'left',
                labelWidth: '40%'
            },
            items: [
                this.firstNameField,
                this.lastNameField,
                this.langField
            ]
        });

        this.usernameField = new Ext.form.Email({
            required: true,
            labelWidth: '40%',
            label: feyaSoft.touch.lang.common['email']
        });
        this.pwField = new Ext.form.Password({
            required: true,
            labelWidth: '40%',
            label: feyaSoft.touch.lang.common['password'],
            useClearIcon: true
        });

        var signupButton = new Ext.Button({
            text:  '&nbsp;&nbsp;' + feyaSoft.touch.lang.login['signup'] +' &raquo;&nbsp;&nbsp;',
            disabled: true,
            ui: 'action',
            handler: this.onRegister,
            scope: this
        });

        var policyCheckbox = new Ext.form.Checkbox({
            label:  'Agree CubeDrive <a href="http://www.cubedrive.com/privacyPolicy.gsp">Privacy Policy</a> and <a href="http://www.cubedrive.com/termOfService.gsp">Terms of Use</a>',
            checked: false,
            labelWidth: '80%'
        });
        policyCheckbox.on('check', function(){signupButton.enable();}, this);
        policyCheckbox.on('uncheck', function(){signupButton.disable();}, this);

        this.bottomBar = new Ext.Toolbar({
            ui: 'light',
            dock: 'bottom',
            scope: this,
            items: [{
                xtype: 'spacer'
            }, signupButton, {
                text: feyaSoft.touch.lang.common['back'],
                ui: 'forward',
                handler: this.onLoginTap,
                scope: this
            }, {
                xtype: 'spacer'
            }]
        });

        this.topBar = new Ext.Toolbar({
            dock : 'top',
            title: "Create FREE account",
            layout : {
                pack : 'left'
            },
            ui : 'light',
            items : [{xtype : 'spacer'}]
        });

        this.items = [this.nameSet, {
            xtype: 'fieldset',
            instructions: feyaSoft.touch.lang.common['aboutCubeDrive'],
            items: [
                this.usernameField,
                this.pwField,
                policyCheckbox
            ]
        }];

        this.dockedItems = [this.topBar, this.bottomBar];

        // init the process
        feyaSoft.touch.SignupPanel.superclass.initComponent.call(this);
    },

    