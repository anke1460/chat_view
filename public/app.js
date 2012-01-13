Ext.Loader.setConfig({ enabled: true });

Ext.application({
    name: 'JiaoYou',
    controllers:
      [
    	'Login',
    	'Signup',
	'Location'
      ],
    models : ['User', 'Search']
});
