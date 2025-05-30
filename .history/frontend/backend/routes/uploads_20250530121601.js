const express = require("express");
const multer = require("multer");
const path = require("path");

const router = express.Router();

// Storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); 
  }
});

const upload = multer({ storage });

// POST route to upload file
router.post("/upload", upload.single("file"), (req, res) => {
  try {
    res.status(200).json({
      message: "File uploaded successfully",
      filePath: req.file.path
    });
  } catch (error) {
    res.status(500).json({ error: "File upload failed" });
  }
});

module.exports = router;
