Ext.define('JiaoYou.controller.Location', {
    extend: 'Ext.app.Controller',
    config: {
    },
    
    views: [
        'ClientInterface'    
    ],   

    stores: [
    ],

    refs: [
        {
            ref         : 'client_interface',
            selector    : 'client_interface'
        }
    ],

    init: function() {
        this.control({
            '#location_search_button': {
                tap: this.onDisplayLocation
            }
        });
    },

    onDisplayLocation: function() {
       Ext.create('Ext.Picker', {
        slots: [
        {
            name : 'province',
            title: '省份',
            data : [
                {text: '湖北', value: '湖北'},
                {text: '北京', value: '北京'},
                {text: '上海', value: '上海'},
                {text: '广州', value: '广州'}
            ]
        },
        {
            name : 'city',
            title: '城市',
            data : [
                {text: '武汉', value: '武汉'},
                {text: '北京', value: '北京'},
                {text: '上海', value: '上海'},
                {text: '广州', value: '广州'}
            ]
        }
    ],
     listeners: {
   

        pick: function(self, value, slots, op) {
                    var a= {'湖北':'武汉','北京':'北京'};
            console.log(2222)
            console.log(value)
            self.setSlots([
                           {
            name : 'province',
            title: '省份',
            data : [
                {text: '湖北', value: '湖北'}
            ]
        },{
            name : 'city',
            title: '城市',
            data : [
                {text: '武汉', value: '武汉'},
                {text: '宜昌', value: '宜昌'},
                ]}
            ]
            );
            self.setValueAnimated({
                province: '湖北',
                city: '宜昌'
            })
            
             
        }
    }
}).show();   
    }    
});
