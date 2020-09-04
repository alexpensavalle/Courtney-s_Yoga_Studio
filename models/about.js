const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const aboutSchema = new Schema({
  dateTimeComment: {type: Date},
  commentTitle: {type: String},
  comments: {type: String},
  user: {type: Schema.Types.ObjectId},//get their name though
});

module.exports = mongoose.model('About', aboutSchema);