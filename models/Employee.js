const mongoose = require('mongoose');
const EmployeeSchema = new mongoose.Schema({
    firstName:{
        type:String
    },
    middleName:{
        type:String
    },
    lastName:{
        type:String
    },
    position:{
        type:String
    },
    division:{
        type:String
    },
    unit:{
        type:String
    },
    sex:{
        type:String
    },
    email:{
        type:String
    },
    role:{
        type:String
    },
});

module.exports = Employee = mongoose.model('employee',EmployeeSchema)