Ext.define('Challenge.store.PurchaseOrderStore',{
    extend: 'Ext.data.Store',
    autoLoad: true,
    model: 'Challenge.model.PurchaseOrderModel',
    pageSize:10000,
    remoteSort: false,
    remoteFilter: false
});