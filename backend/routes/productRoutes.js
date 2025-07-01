const express = require('express');
const router = express.Router();
const Product = require('../models/addProducts');
const multer = require('multer');
const path = require('path');

// Image upload setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});
const upload = multer({ storage });

// 🔁 GET all products
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// ✏️ PUT edit product
router.put('/:id', async (req, res) => {
  try {
    // ✅ Basic validation
    if (!req.body.productName) {
      return res.status(400).json({ error: 'Product name is required' });
    }

    // ✅ Proceed with update
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    console.error('❌ Error updating product:', err);
    res.status(500).json({ error: 'Update failed' });
  }
});

// 🖼️ PATCH: Update product image
router.patch('/upload-image/:id', upload.single('image'), async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      { image: `/uploads/${req.file.filename}` },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Image update failed' });
  }
});

// 🗑️ DELETE product
router.delete('/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Delete failed' });
  }
});

module.exports = router;