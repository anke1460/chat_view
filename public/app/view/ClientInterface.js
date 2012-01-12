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
                items: [
                  {
                    xtype: 'toolbar',
                    docked: 'top',
                    items: [
                        { text: '地区', id: 'location_search_button'},
                        { xtype: 'spacer' },
                        { text: '保存' }
                    ]
                  }
                ]
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
                iconCls: 'mapTab',
                layout: 'fit',
                items: 
                   {
                    xtype: 'panel',
                    layout: 'fit',
                    items: 
                       maps= new Ext.Map({
                        title: 'Map',
                       useCurrentLocation: true,
                        mapOptions: {
                            zoom: 11,
                            mapTypeId : google.maps.MapTypeId.ROADMAP,
                            navigationControl: true,
                            navigationControlOptions: {
                                style: google.maps.NavigationControlStyle.DEFAULT
                            }
                        },
                        listeners: {
                            maprender: function(mapC, map) {
                                 Ext.defer(function() {
                                     navigator.geolocation.getCurrentPosition(onSuccess, onError);
                              
                            function onSuccess(position) {
                               console.log(7777)
                               console.log(position)
        		       var lo = new google.maps.LatLng(position.coords.latitude ,position.coords.longitude);
                                var marker = new google.maps.Marker({
                                  position: lo,
                                  title : '她的位置',
                                  map: map
                               });
                              var infowindow = new google.maps.InfoWindow({
                                     content: 'Hey, 我在这里'
                               });
                               google.maps.event.addListener(marker, 'click', function() {
                                  infowindow.open(map, marker);
                               });
                            }
                            function onError(error) {
                         
                            }
                           }, 800, this);
                          
                                console.log('first')
                          
                               
                           
                            }
                        }
                        })
                    
                  }
             }
        ]                
    }
});
        