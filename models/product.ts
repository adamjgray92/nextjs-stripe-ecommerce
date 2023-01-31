import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  picture: String,
});

const Product =
  mongoose.models?.Product || mongoose.model('Product', productSchema);

export default Product;
