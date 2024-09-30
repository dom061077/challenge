Ext.define('Challenge.controller.PurchaseOrderFormController',{
    extend: 'Ext.app.Controller',
    views: ['PurchaseOrderFormView'],
    stores: ['ClientStore','CurrencyStore'],
    models: ['PurchaseOrderModel'],
    init: function(app){
        this.control({
            'purchaseorderformview': {
                afterrender: this.initView

            },
            'purchaseorderformview button[action = "cancel"]': {
                click: this.onCancel
            },
            'purchaseorderformview button[action = "reset"]': {
                click: this.onReset
            },
            'purchaseorderformview button[action = "save"]': {
                click: this.onSave
            }                        
            /*
            'purchaseorderview button[action=groupDate]':{
                click: this.onGroupDate
            }
            */
        }
        );
    },
    initView: function(view){
        var currencyStore = this.getCurrencyStoreStore();
        var currencyCmb = view.down('#currencyCmb');
        currencyCmb.bindStore(currencyStore);
        var clientCmb = view.down('#clientCmb');
        var store = this.getClientStoreStore();
        clientCmb.bindStore(store);
        store.load({
            callback: function(){
                view.loadRecord(view.record); //estoy teniendo una race condition por eso hago el loadrecord aquí
            }
        });
        
    },
    onCancel: function(btn){
        var win = btn.up('purchaseorderformview').up('window');
        win.close();
    },
    onReset: function(btn){
        var view = btn.up('purchaseorderformview');
        view.loadRecord(view.record);
    },
    onSave: function(btn){
        var view = btn.up('purchaseorderformview');
        //el API REST no soporta POST ni PUT
        Ext.MessageBox.show({
            title:'Message',
            msg:'Record saved',
            fn: function(btn){
                view.up('window').close();
            }
        });
    },
    loadDetail: function(orderId){

    }
    /*
    onGroupDate: function(button, event, options){

    }*/
});