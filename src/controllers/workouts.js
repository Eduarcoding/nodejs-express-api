const workoutService = require('../services/workout');

const getAllWorkouts = (_, res) => {
    const workouts = workoutService.getAllWorkouts();
    res.send("Get all workouts");
};

const getOneWorkout = (req, res) => {
    res.send(`Get workout ${req.params.workoutId}`);
}

const createOneWorkout = (req, res) => {
    const createdWorkout = workoutService.createOneWorkout(req.params.workoutId);
    res.send(`Create workout ${req.params.workoutId}`);
}

const updateOneWorkout = (req, res) => {
    const updatedWorkout = workoutService.createOneWorkout(req.params.workoutId);
    res.send(`Update workout ${req.params.workoutId}`);
}

const deleteOneWorkout = (req, res) => {
    res.send(`Delete workout ${req.params.workoutId}`);
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createOneWorkout,
    updateOneWorkout,
    deleteOneWorkout
}