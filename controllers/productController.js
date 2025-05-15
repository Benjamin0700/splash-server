import Product from '../models/Product.js';

// Barcha mahsulotlar
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Serverda xatolik' });
  }
};

// Bitta mahsulot
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: 'Mahsulot topilmadi' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: 'Server xatolik' });
  }
};

// Mahsulot qo'shish
export const createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const saved = await newProduct.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: 'Maʼlumotlarni toʻgʻri yuboring' });
  }
};

// Mahsulotni tahrirlash
export const updateProduct = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Topilmadi' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: 'Yangilashda xatolik' });
  }
};

// Mahsulotni o‘chirish
export const deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Topilmadi' });
    res.json({ message: 'Mahsulot o‘chirildi' });
  } catch (err) {
    res.status(500).json({ error: 'Server xatolik' });
  }
};
