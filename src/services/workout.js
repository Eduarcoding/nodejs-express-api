const workoutRepository = require("../datalayer/workout");
const { v4: uuid } = require("uuid");

const getAllWorkouts = () => {
    const allWorkouts = workoutRepository.getAllWorkouts();
    return allWorkouts;
};
const getOneWorkout = () => {
    return;
};
const createOneWorkout = (newWorkout) => {
    
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString("es-ES", { timezone: "UTC"} ),
        updatedAt: new Date().toLocaleString("es-ES", { timezone: "UTC"} )
    };

    workoutRepository.createNewWorkout(workoutToInsert);
    return workoutToInsert;
};
const updateOneWorkout = () => {
    return;
};
const deleteOneWorkout = () => {
    return;
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createOneWorkout,
    updateOneWorkout,
    deleteOneWorkout
}