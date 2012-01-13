Ext.define('JiaoYou.store.Users', {
    extend: 'Ext.data.Store',
    model: 'JiaoYou.model.User',
    getGroupString: function(record) {
       return record.get('lastName')[0];
   },
   data: [
    { query: 'Sencha' }
    ]

});
