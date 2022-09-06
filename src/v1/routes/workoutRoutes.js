const express = require('express')
const router = express.Router();
const workoutController = require("../../controllers/workouts");

router
    .get('/', workoutController.getAllWorkouts)
    .get("/:workoutId", workoutController.getOneWorkout)
    .post("/:workoutId", workoutController.createOneWorkout)
    .patch("/:workoutId", workoutController.updateOneWorkout)
    .delete("/:workoutId", workoutController.deleteOneWorkout);

module.exports = router; 