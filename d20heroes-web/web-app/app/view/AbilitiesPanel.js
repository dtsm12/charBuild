Ext.define("TestCharacterLayout.view.AbilitiesPanel", {
    extend: 'Ext.Panel',
    requires: 'TestCharacterLayout.view.Ability',
    alias: 'widget.abilities',
    config: {
	    layout: 'vbox',
	    items: [
            {
                docked: 'top',
                xtype: 'panel',
                html: 'Abilities',
	            cls: 'charBox'
            },
		    {
	            xtype: 'ability',
	            itemId: 'ab-str',
            	name: 'Strength',
            	value: '13'
	        },
	        {
	            xtype: 'ability',
	            itemId: 'ab-agi',
            	name: 'Agility',
            	value: '18'
	        },
	        {
	            xtype: 'ability',
	            itemId: 'ab-fig',
            	name: 'Fighting',
            	value: '12'
	        },
		    {
	            xtype: 'ability',
	            itemId: 'ab-awa',
            	name: 'Awareness',
            	value: '11'
	        },
	        {
	            xtype: 'ability',
	            itemId: 'ab-sta',
            	name: 'Stamina',
            	value: '13'
	        },
	        {
	            xtype: 'ability',
	            itemId: 'ab-dex',
            	name: 'Dexterity',
            	value: '9'
	        },
	        {
	            xtype: 'ability',
	            itemId: 'ab-int',
            	name: 'Intellect',
            	value: '9'
	        },
	        {
	            xtype: 'ability',
	            itemId: 'ab-pre',
            	name: 'Presence',
            	value: '9'
	        }
        ]
    }
});
