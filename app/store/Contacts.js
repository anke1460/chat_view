Ext.regStore('Contacts', {
    model: 'Contact',
    sorters: [{
        property: 'lastname',
        direction: 'ASC'
    }],
    proxy: {
        type: 'localstorage',
        id: 'contacts-store'
    },
    getGroupString: function (record) {
        if (record && record.data.date) {
            return record.get('date').toDateString();
        } else {
            return '';
        }
    }
});

app.stores.contacts = Ext.StoreMgr.get('Contacts');