const mongoose = require('mongoose');
const StocksSchema = new mongoose.Schema({
    onhand:{
        type:String
    },
    allocated:{
        type:String
    },
    inStock:{
        type:String
    },
    minStockLevel:{
    },
    onOrder:{
        type:String
    },
    
    orderTo:{
        type:String
    },
    
    orderStatus:{
        type:String
    },
    
    itemPrice:{
        type:String
    },
    
    totalOrder:{
        type:String
    },
    
    orderBy:{
        type:String
    }
})
;
module.exports = Stocks = mongoose.model('stocks',StocksSchema);