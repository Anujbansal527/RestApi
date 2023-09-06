//creating schema
const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name : {
        type:String,
        require:true,
        minLength:3
    },
    email:{
            type:String,
            require:true,
            unique:[true,"Email id already present"],
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error("Invalid Email");
                }
            }
                //validator package validator
    },
    phone:{
        type:Number,
        min:10,
        require:true,
        unique:true
    },
    address:{
        type: String,
        require: true
    }
});
        //creating schema


//creating Model

const Student = new mongoose.model('Student',studentSchema);
                                    //singular form     //schema name
module.exports = Student;