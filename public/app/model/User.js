Ext.define('JiaoYou.model.User', {
    extend: 'Ext.data.Model',
    fields: [
                {name: "id",                type: "int"},
                {name: "text",              type: "string"},
                {name: "from_user",         type: "string"},
                {name: "profile_image_url", type: "string"}
            ],

            proxy: 'twitter'
});
