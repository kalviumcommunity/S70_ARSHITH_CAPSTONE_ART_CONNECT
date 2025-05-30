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

const express = require("express");
const router = express.Router();
const Portfolio = require("../models/Portfolio");

// POST /api/portfolios - create new portfolio item
router.post("/portfolios", async (req, res) => {
  try {
    const newItem = new Portfolio(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(500).json({ error: "Could not upload portfolio item" });
  }
});

module.exports = router;

