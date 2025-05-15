import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import productRoutes from './routes/productRoutes.js';

const app = express();

// 🔥 To‘g‘ri CORS konfiguratsiyasi
app.use(cors({
  origin: 'https://benjamin0700.github.io',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.use(express.json());
app.use('/api/products', productRoutes);

// 🔗 MongoDB ulanish
mongoose.connect('mongodb+srv://jalolsoxiddinov777:ODhNX8q9ewksZ3sl@cluster.dqa55z5.mongodb.net/splash')
  .then(() => {
    console.log('✅ MongoDB muvaffaqiyatli ulandi');
    app.listen(3000, () => console.log('🚀 Server 3000-portda ishlayapti'));
  })
  .catch(err => console.error('❌ MongoDB ulanishida xato:', err));
    