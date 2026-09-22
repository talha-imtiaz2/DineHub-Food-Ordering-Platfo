const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  name: String,
  guests: Number,
  date: String,
  time: String,
  message: String
});

module.exports = mongoose.model('Reservation', reservationSchema);
