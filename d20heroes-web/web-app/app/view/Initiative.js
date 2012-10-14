Ext.define("TestCharacterLayout.view.Initiative", {
    extend: 'Ext.Panel',
    alias: 'widget.initiative',

    name: '',
    value: '',
    modifier: '',

    constructor: function (config) {
        this.callParent(arguments); // calls Ext.panel.Panel's constructor

        // set ability specifics
        this.value = config.value;
    },

    initialize: function( obj, eOpts ) {
    	this.query('#value')[0].setHtml('<center>'+this.value+'</center>');
    },

    config: {
	    layout: 'hbox',
        border: 1,
	    items: [
	        {
	            xtype: 'panel',
	            itemId: 'name',
	            cls: 'charBox',
	            html: 'Initiave',
	            flex: 1
	        },
	        {
	            xtype: 'panel',
	            itemId: 'value',
	            cls: 'charBox',
	            flex: 1
	        }
        ]
    }
});
