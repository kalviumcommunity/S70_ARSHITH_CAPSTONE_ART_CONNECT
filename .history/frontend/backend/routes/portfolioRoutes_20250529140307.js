import express from 'express';
import Portfolio from '../models/Portfolio.js';

const router = express.Router();

// CREATE
router.post('/', async (req, res) => {
  try {
    const newPortfolio = await Portfolio.create(req.body);
    res.status(201).json(newPortfolio);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ
router.get('/', async (req, res) => {
  try {
    const portfolios = await Portfolio.find();
    res.status(200).json(portfolios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
