Ext.define("TestCharacterLayout.view.DefencesPanel", {
    extend: 'Ext.Panel',
    requires: 'TestCharacterLayout.view.Defence',
    alias: 'widget.defences',
    config: {
	    layout: 'vbox',
	    items: [
            {
                docked: 'top',
                xtype: 'panel',
                html: 'Defences',
	            cls: 'charBox'
            },
		    {
	            xtype: 'defence',
	            itemId: 'def-dod',
            	name: 'Dodge',
            	value: '13',
            	ability: 'AGL'
	        },
		    {
	            xtype: 'defence',
	            itemId: 'def-par',
            	name: 'Parry',
            	value: '13',
            	ability: 'FGT'
	        },
		    {
	            xtype: 'defence',
	            itemId: 'def-for',
            	name: 'Fortitude',
            	value: '13',
            	ability: 'STA'
	        },
		    {
	            xtype: 'defence',
	            itemId: 'def-tou',
            	name: 'Toughness',
            	value: '13',
            	ability: 'STA'
	        },
		    {
	            xtype: 'defence',
	            itemId: 'def-wil',
            	name: 'Will',
            	value: '13',
            	ability: 'AWE'
	        }
        ]
    }
});
