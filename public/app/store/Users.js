Ext.regStore('Users', {
    model: 'User',
    sorters: [{
        property: 'lastname',
        direction: 'ASC'
    }],
    proxy: {
        type: 'localstorage',
        id: 'users-store'
    },
    getGroupString: function (record) {
        if (record && record.data.date) {
            return record.get('date').toDateString();
        } else {
            return '';
        }
    }
});

app.stores.users = Ext.StoreMgr.get('Users');