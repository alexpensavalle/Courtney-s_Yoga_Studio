const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  },
  arrival: { type: Date }
}, {
  timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);