
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
