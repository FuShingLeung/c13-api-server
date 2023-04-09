const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

const {
  getExercises,
  addExercise,
  updateExercise,
  removeExercise,
} = require('../controllers/exercise.controller');

router
  .get('/:id?', getExercises)
  .post(
    '/',
    body('exerciseName').notEmpty().trim(),
    body('muscleGroup').notEmpty().trim(),
    addExercise,
  )
  .put('/:id', updateExercise)
  .delete('/:id', removeExercise);

module.exports = router;
