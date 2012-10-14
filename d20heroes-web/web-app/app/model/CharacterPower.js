/*
 * File: app/model/CharacterPower.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.model.CharacterPower', {
    extend: 'Ext.data.Model',

    uses: [
        'MyApp.model.Power'
    ],

    config: {
        fields: [
            {
                name: 'id'
            },
            {
                name: 'rank'
            },
            {
                name: 'power_id',
                mapping: 'power.id'
            },
            {
                name: 'power_name',
                mapping: 'power.name'
            },
            {
                name: 'costPerRank',
                mapping: 'power.costPerRank'
            }
        ],
        hasOne: {
            associationKey: 'power_id',
            model: 'MyApp.model.Power',
            foreignKey: 'id'
        }
    }
});