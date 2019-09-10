const mongoose=require('mongoose');



const UserSchema =mongoose.Schema({
    first_name: String,
    last_name:String,
    phone_number:String,
    birth_date:String,
    photo:String,
    address:String,
    email_address:String,
    password: String
})
const UserModel = mongoose.model('user',UserSchema);
/**
 * es5
 */
module.exports = UserModel;
/**
 * export UserModel variable from this file
 */



