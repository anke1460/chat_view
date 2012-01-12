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
     var pick =  Ext.create('Ext.Picker', {
        doneButton: '选择',
        cancelButton: '取消',
        slots: [
        {
            name : 'province',
            title: '省份',
            data : GenenrelData.province
        },
        {
            name : 'city',
            title: '城市',
            data : [
                {text: '北京', value: '北京'}
            ]
        }
    ],
     listeners: {
        pick: function(self, value, slots, op) {
            console.log(6611)
           console.log(value)
          
        }
    },
    onDoneButtonTap: function(e){
        console.log(pick.getValue())
    }
   });
    pick.show();
    pick.getItems().items[1].on('slotpick',function(value, node, opt){
      var data = GenenrelData.city[value]
      var city = [];
      Ext.each(data, function(d){
        city.push({text: d, value: d});
      });
      pick.getItems().items[2].setData(city);
      pick.getDoneButton().enable();
    });
    
     pick.getItems().items[1].on('itemtouchstart',function(value, node, opt){
        pick.getDoneButton().disable();
     });
      
     pick.getItems().items[2].on('itemtouchstart',function(value, node, opt){
       pick.getDoneButton().disable();
     });
    }    
});
