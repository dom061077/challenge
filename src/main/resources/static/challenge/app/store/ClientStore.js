Ext.define('Challenge.store.ClientStore',{
    extend: 'Ext.data.Store',
    autoLoad: true,
    model: 'Challenge.model.ClientModel',
    pageSize:10000,
    remoteSort: false,
    remoteFilter: false
});