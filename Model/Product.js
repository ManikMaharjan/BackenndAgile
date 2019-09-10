const mongoose=require('mongoose');
const ProductSchema =mongoose.Schema({
    product_name:String,
    product_price:String,
    product_quantity:String,
    product_photo:String,
    product_description:String,
    product_rating:String,
    category_id:String , ref: 'category'
})
const ProductModel=mongoose.model('product',ProductSchema);
module.exports=ProductModel;s