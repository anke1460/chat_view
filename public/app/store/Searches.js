Ext.define('JiaoYou.store.Searches', {
    extend  : 'Ext.data.Store',
    model   : 'JiaoYou.model.Search',
    requires: ['JiaoYou.model.Search'],
    data: [
    { query: 'Sencha' }
    ]
});