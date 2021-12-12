const mongoose = require('mongoose');
const { Schema } = mongoose;

const messageTemplateSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  templateID: {
    type: String,
    required: true
  },
  serviceID: {
    type: String,
    required: true
  },
  userID: {
    type: String,
    required: true
  },
  accessToken: {
    type: String,
    required: true
  }
});

const MessageTemplate = mongoose.model('MessageTemplate', messageTemplateSchema);

module.exports = MessageTemplate;