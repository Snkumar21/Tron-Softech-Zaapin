require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
app.use(cors({
    origin: 'http://localhost:5173',  // Update if you're using Vite
    credentials: true
}));
app.use(express.json());
const PORT = process.env.PORT || 5000;

// Serve uploaded images statically
app.use('/api/categories', require('./routes/categoryRoutes'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.get("/", (req, res) => {
    res.send("Zappin Backend is running ✅");
});

const categoryRoutes = require('./routes/categoryRoutes');
const expenseRoutes = require('./routes/expensesRoutes');
const productRoutes = require('./routes/productRoutes');
const subCategoryRoutes = require('./routes/subCategoryRoutes');

app.use('/api/expenses', expenseRoutes);
app.use('/api/products', productRoutes);
app.use('/api/subcategories', subCategoryRoutes);
app.use('/api/categories', categoryRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch(err => console.error("❌ MongoDB connection error:", err));

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});