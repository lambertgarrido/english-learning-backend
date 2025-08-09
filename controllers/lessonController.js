// File: backend/controllers/lessonController.js
const Lesson = require('../models/Lesson');

exports.getLessons = async (req, res) => {
  const lessons = await Lesson.find();
  res.json(lessons);
};

exports.getLessonById = async (req, res) => {
  const lesson = await Lesson.findById(req.params.id);
  res.json(lesson);
};
