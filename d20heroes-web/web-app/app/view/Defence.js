Ext.define("TestCharacterLayout.view.Defence", {
    extend: 'Ext.Panel',
    alias: 'widget.defence',

    name: '',
    value: '',
    modifier: '',

    constructor: function (config) {
        this.callParent(arguments); // calls Ext.panel.Panel's constructor

        // set ability specifics
        this.name = config.name;
        this.value = config.value;
        this.ability = config.ability;
    },

    initialize: function( obj, eOpts ) {
    	this.query('#name')[0].setHtml(this.name+' (' + this.ability + ')');
    	this.query('#value')[0].setHtml(this.value);
    },

    config: {
	    layout: 'hbox',
        border: 1,
	    items: [
	        {
	            xtype: 'panel',
	            itemId: 'name',
	            cls: 'charBox',
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
