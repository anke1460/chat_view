Ext.define('JiaoYou.model.Search', {
    extend: 'Ext.data.Model',
    fields: [
                {name: "id",    type: "int"},
                {name: "query", type: "string"}
            ],

            hasMany: {
                model: "JiaoYou.model.Users",
                name : 'users',
                filterProperty: 'query',
                storeConfig: {
                    pageSize: 10,
                    remoteFilter: true,
                    clearOnPageLoad: false
                }
            },

            proxy: {
                type: 'localstorage',
                id  : 'twitter-searches'
            }
});