import mongoose from 'mongoose';

// 🧩 Har bir o'lcham obyekti uchun schema
const sizeSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    default: 0
  }
}, { _id: false });

// 🧩 Asosiy mahsulot schema
const productSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    default: 0
  },
  categories: {
    type: String,
    required: true
  },
  about: {
    type: String,
    required: true
  },
  reviews: {
    type: [String],
    default: []
  },
  sizes: {
    type: [sizeSchema],
    default: []
  }
}, { timestamps: true });

export default mongoose.model('Product', productSchema);
