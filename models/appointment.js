const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  subscriptionType: {
    type: String,
    enum: ['Bronze', 'Silver', 'Gold']
  },
}, {
  timestamps: true
})

module.exports = mongoose.model('Ticket', ticketSchema);