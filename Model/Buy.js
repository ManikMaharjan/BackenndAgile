const mongoose=require('mongoose');
const BuySchema= mongoose.Schema({
    product_id:String ,ref: 'product',
    user_id: String ,ref: 'user',
    quantity: String
  
})
const BuyModel=mongoose.model('buy',BuySchema);
module.exports=BuyModel;
