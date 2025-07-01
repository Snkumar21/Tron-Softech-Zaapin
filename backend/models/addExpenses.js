const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  outletLocation: { type: String, required: true },
  amount: { type: Number, required: true },
  expenseType: { type: String, required: true },
  expenseDate: { type: Date, required: true },
  note: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Expense', expenseSchema);