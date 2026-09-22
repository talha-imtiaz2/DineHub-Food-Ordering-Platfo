const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  name: String,
  address: String,
  instructions: String
});

module.exports = mongoose.model('Order', orderSchema);
