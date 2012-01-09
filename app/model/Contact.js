App.models.Contact = Ext.regModel('Contact', {
    fields: [
        {
            name: 'id',
            type: 'int'
        }, {
            name: 'firstname',
            type: 'string'
            {
            name: 'lastname',
            type: 'string'        
        }, {
            name: 'email',
            type: 'string'
        }, {
            name: 'phone',
            type: 'string'
        }       
    ],

    validations: [
        {
            type: 'presence',
            name: 'firstname'
        {
            type: 'presence',
            name: 'lastname'
        }, {
        }, {
            type: 'format',
            name: 'email',
            matcher: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
            message: 'must be a valid email'
        }
    ],

    proxy: {
        type: 'localstorage',
        id: 'app-contacts'
    }
});
