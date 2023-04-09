const mongoose = require('mongoose');
const { Schema } = mongoose;

const ExerciseSchema = new Schema({
  exerciseName: { type: String, required: true },
  muscleGroup: { type: String, required: true },
});

const Exercise = mongoose.model('Exercise', ExerciseSchema);

module.exports = Exercise;
