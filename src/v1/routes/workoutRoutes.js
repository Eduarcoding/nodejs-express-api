const express = require('express')
const router = express.Router();
const workoutController = require("../../controllers/workouts");
const { validationRules, validate } = require("../../controllers/validation/workout")

router
    .get('/', workoutController.getAllWorkouts)
    .get("/:workoutId", workoutController.getOneWorkout)
    .post("/",  workoutController.createOneWorkout)
    .patch("/:workoutId", workoutController.updateOneWorkout)
    .delete("/:workoutId", workoutController.deleteOneWorkout);

module.exports = router; 