const DB = require("./data.json");
const { saveToDatabase } = require("../datalayer/utils");

const getAllWorkouts = () => {
    return DB.workouts;
}

const createNewWorkout = (newWorkout) => {

    const isAlreadyCreated = DB.workouts.findIndex( w => w.name === newWorkout.name) > -1;
    
    if(isAlreadyCreated){
        return;
    }

    DB.workouts.push(newWorkout);
    saveToDatabase(DB);

    return newWorkout;
}
module.exports = { getAllWorkouts, createNewWorkout }