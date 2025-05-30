
router.get("/jobs", async (req, res) => {
  const jobs = await Job.find();
  res.status(200).json(jobs);
});

router.get("/users/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.status(200).json(user);
});

router.get("/portfolios/:userId", async (req, res) => {
  const portfolios = await Portfolio.find({ userId: req.params.userId });
  res.status(200).json(portfolios);
});

const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

// POST 
router.post("/jobs", async (req, res) => {
  try {
    const newJob = new Job(req.body);
    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (error) {
    res.status(500).json({ error: "Failed to create job" });
  }
});

module.exports = router;

// PUT
router.put("/jobs/:id", async (req, res) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedJob);
  } catch (error) {
    res.status(500).json({ error: "Failed to update job" });
  }
});

