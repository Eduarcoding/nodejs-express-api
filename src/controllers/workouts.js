const workoutService = require('../services/workout');

const getAllWorkouts = (_, res) => {
    const workouts = workoutService.getAllWorkouts();
    res.send({ status: "OK", data: workouts });
};

const getOneWorkout = (req, res) => {
    res.send(`Get workout ${req.params.workoutId}`);
}

const createOneWorkout = (req, res) => {

    const newWorkout = {
        name: req.body["name"],
        mode: req.body["mode"],
        equipment: req.body["equipment"],
        exercises: req.body["exercises"],
        trainerTips: req.body["trainerTips"],
    };
    const createdWorkout = workoutService.createOneWorkout(newWorkout);
    res.status(201).send({ data : createdWorkout});
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