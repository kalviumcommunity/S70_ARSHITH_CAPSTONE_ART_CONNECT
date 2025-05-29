import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import portfolioRoutes from './routes/portfolioRoutes.js';

dotenv.config();
const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection failed:', err));

// Routes
app.use('/api/portfolios', portfolioRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
import authRoutes from './routes/authRoutes.js';
import protect from './middleware/authMiddleware.js';

app.use('/api/auth', authRoutes);

// Example protected route
app.get('/api/protected', protect, (req, res) => {
  res.json({ message: `Hello ${req.user.name}, you're authenticated.` });
});

