const express = require('express');
const v1WorkoutRouter = require('./v1/routes/workoutRoutes');

const app = express();
const PORT = process.env.PORT || 3000; 

app.use(express.json()) //Adds a piece of middleware that is a json body parser
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, ()=> console.log(`server listening in port: ${PORT}`)); 