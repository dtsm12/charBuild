Ext.define("TestCharacterLayout.view.Main", {
    extend: 'Ext.Container',
    requires: ['TestCharacterLayout.view.AbilitiesPanel'
             , 'TestCharacterLayout.view.DefencesPanel'
             , 'TestCharacterLayout.view.Initiative'],
    config: {
	    fullscreen: true,
	    layout: 'hbox',
	    items: [
            {
                docked: 'top',
                xtype: 'panel',
                html: 'Kriek',
	            cls: 'charBox'
            },
	        {
	            xtype: 'abilities',
	            flex: 1
	        },
            {
            	xtype: 'panel',
        	    layout: 'vbox',
            	flex: 1,
            	items: [
        	        {
        	            xtype: 'defences'
        	        },
        	        {
        	        	xtype: 'panel',
        	        	height: 20
        	        },
        	        {
        	        	xtype: 'initiative',
        	        	value: 20
        	        }
        	    ]
            }
	    ]
    }
});
