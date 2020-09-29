const mongoose = require('mongoose');
const AssetsSchema = new mongoose.Schema({
    assetName:{
        type:String
    },
    serialNumber:{
        type:String
    },
    category:{
        type:String
    },
    subCategory:{
        type:String
    },
    brand:{
        type:String
    },
    model:{
        type:String
    },
    value:{
        type:String
    },
    custodian:{
        type:String
    },
    custodianPosition:{
        type:String
    },
    custodianDivision:{
        type:String
    },
    custodianUnit:{
        type:String
    },
    description:{
        type:String
    },
    remarks:{
        type:String
    },
    dateAcquired:{
        type:String
    },
    estimatedLifespan:{
        type:String
    },
    condition:{
        type:String
    },
    nameOfSupplier:{
        type:String
    }
});

module.exports = Assets = mongoose.model('assets',AssetsSchema)