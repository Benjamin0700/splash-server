import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

// GET: Barcha mahsulotlar
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Server xatosi' });
  }
});

// POST: Yangi mahsulot qo‘shish
router.post('/', async (req, res) => {
  try {
    const product = new Product(req.body);
    const saved = await product.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: 'Mahsulotni saqlab bo‘lmadi', error: err.message });
  }
});

export default router;
