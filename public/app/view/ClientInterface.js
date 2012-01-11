Ext.define('JiaoYou.view.ClientInterface', {
    extend: 'Ext.tab.Panel',
    xtype: 'client_interface',
    config: {
        fullscreen : true,
        activeTab: 0,
        tabBar: {
         docked: 'bottom',
         cls: 'tubeTweetTabBar',
         layout: {
             pack: 'center'
         }
        },

        defaults: {
            scrollable: true
        },
        layout: {
            animation: {
                type: 'slide',
                duration: 200
            }
        },
        items: [
             {
                title: '同城',
                iconCls: 'team',
                items: [{
                    xtype: 'toolbar',
                    docked: 'top',
                    items: [
                        { text: '地区', id: 'location_search_button'},
                        { xtype: 'spacer' },
                        { text: '保存' }
                    ]
                }]
             },
             {
                title: '消息',
                iconCls: 'home',
                html: '得到的'
             },
             {
                title: '个人设置',
                iconCls: 'settings'
             },
             {
                title: '位置',
                iconCls: 'mapTab'
             }
        ]                
    }
});
        