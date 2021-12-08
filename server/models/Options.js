const mongoose = require('mongoose');
const { Schema } = mongoose;

const optionsSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String
  },
  brandImageUrl: {
    type: String
  },
  featureImageUrl: {
    type: String
  },
  bio: {
    type: String
  },
  skills: {
    type: Map, 
    of: Boolean
  }
});

const Options = mongoose.model('Options', optionsSchema);

module.exports = Options;