const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StateSchema = new Schema({
  posts: {
    type: Array,
    required: false
  },
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },

});

module.exports = State = mongoose.model('state', StateSchema);
