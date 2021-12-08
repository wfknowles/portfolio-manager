const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  link: {
    type: String
  },
  github: {
    type: String
  },
  tech: {
    type: Map, 
    of: Boolean
  }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;