const express = require('express');
const router = express.Router();
const SubCategory = require('../models/subCategory');
const multer = require('multer');
const path = require('path');

// Multer Config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

// Add SubCategory
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const subCategory = new SubCategory({
      categoryName: req.body.categoryName,
      subCategoryName: req.body.subCategoryName,
      image: req.file ? req.file.filename : ''
    });
    const saved = await subCategory.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get All SubCategories
router.get('/', async (req, res) => {
  try {
    const list = await SubCategory.find().sort({ createdAt: -1 });
    res.json(list);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete SubCategory
router.delete('/:id', async (req, res) => {
  try {
    await SubCategory.findByIdAndDelete(req.params.id);
    res.json({ message: 'SubCategory deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;