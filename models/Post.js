const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  caption: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  photo: {
    type: Object
  },

});

module.exports = Post = mongoose.model('post', PostSchema);