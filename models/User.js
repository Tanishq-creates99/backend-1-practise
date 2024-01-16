const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const validator = require('validator')

const UserModel = new Schema(
    {
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
            validate(value){
             if(!validator.isEmail(value)){
                throw Error("Not A Valid Email")
             }
            }
        },
        password:{
            type:String,
            required:true
        },
        createdAt:{
            type: Date,
            default:Date.now()
        },
        UpdatedAt:{
            type:Date,
            default:Date.now()
        }

    }
)

module.exports = mongoose.model('user',UserModel)