Ext.define('Challenge.store.CurrencyStore',{
    extend: 'Ext.data.Store',
    model: 'Challenge.model.CurrencyModel',
    remoteSort: false,
    remoteFilter: false,    
    data: [
        {Value:'DOLLAR', Description: 'DOLLAR'},
        {Value:'EURO', Description: 'EURO'},        
        {Value:'PESOS', Description: 'PESOS'}
    ]
});