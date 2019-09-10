const CategorySchema= mongoose.Schema({
   category_name: String

})
const CategoryModel= moongoose.model('category', CategorySchema);
module.export=CategoryModel;