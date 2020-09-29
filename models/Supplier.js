const mongoose = require('mongoose');
const SupplierSchema = new mongoose.Schema({
    category:{
        type:String
    },
    subCategory:{
        type:String
    },
    address:{
        type:String
    },
    philgepsRegistration:{
        type:String
    },
    authorizedRepresentative:{
        type:String
    },
    contactNumber:{
        type:String
    },
    status:{
        type:String
    },
    numberOfAwardedProjects:{
        type:String
    }
});
module.exports = Supplier = mongoose.model('supplier',SupplierSchema);