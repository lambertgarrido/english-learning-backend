// File: backend/models/Lesson.js
const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  title: String,
  content: String,
  questions: [
    {
      questionType: { type: String },
      prompt: { type: String },
      options: [{ type: String }],
      answer: { type: String }
    }
  ]
});

module.exports = mongoose.model('Lesson', lessonSchema);
