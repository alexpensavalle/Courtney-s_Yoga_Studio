const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classSchema = new Schema({
  dateTime: {type: Date},
  title: { type: String},
  price: {type: Number},
  instructor: {type: String},
  description: {type: String},
  user: {type: Schema.Types.ObjectId},
  classSize: {type: Number},
  students: [{type: Schema.Types.ObjectId, href:'User'}]
});

module.exports = mongoose.model('Class', classSchema);