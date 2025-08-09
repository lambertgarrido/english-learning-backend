// File: backend/models/Lesson.js
const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  title: String,
  content: String,
  questions: [
    {
      type: String,
      prompt: String,
      options: [String],
      answer: String
    }
  ]
});

module.exports = mongoose.model('Lesson', lessonSchema);