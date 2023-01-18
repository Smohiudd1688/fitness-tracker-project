import React, {useState} from "react";

function WorkoutForm({currentUser, workouts, setWorkouts, onWorkoutSubmit}) {
    const [errors, setErrors] = useState([]);
    const [name, setName] = useState("");
    const [time, setTime] = useState("");
    const [date, setDate] = useState(new Date());
    const [exercises, setExercises] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        setErrors([]);

        const renderExercises = exercises.map(exercise => {
            return (`${exercise.sets} X ${exercise.reps} ${exercise.name}`);
        });

        console.log(renderExercises);

        const workout = {
            title: name,
            time: time,
            date: date,
            exercises: renderExercises,
            username: currentUser.username,
            user_id: currentUser.id
        }

        fetch("/workouts", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(workout)
        })
        .then(res => {
            if(res.ok) {
                res.json().then(resWorkout => {
                    setWorkouts([...workouts, resWorkout])
                })
            } else {
                res.json().then(e => setErrors(e.errors))
            }
        });

        setName("");
        setTime("");
        setDate("");
        setExercises([]);

        onWorkoutSubmit(date);
    }

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleTimeChange(event) {
        setTime(event.target.value);
    }

    function handleDateChange(event) {
        setDate(event.target.value);
    }

    function handleAddExercise(event) {
        event.preventDefault();

        setExercises([...exercises, {
            name: "",
            sets: "",
            reps: ""
        }]);
    }

    function handleExerciseChange(event, index, property) {
        exercises[index][property] = event.target.value;
        setExercises([...exercises]);
    }

    function handleRemove(index) {
        exercises.splice(index, 1);
        setExercises([...exercises]);
    }

    const renderErrors = errors.map((error, index) => {
        return (
            <p className="errors" key={index}>* {error}</p>
        );
    })

    return(
        <div>
            {errors.length !== 0 ? renderErrors : null}
            <form className="workoutForm" onSubmit={handleSubmit}>
                <h3>Add a Workout</h3><br></br>
                <label htmlFor="name">Name of Workout: </label>
                <input onChange={handleNameChange} type="text" id="name" name="name" value={name} /><br></br><br></br>
                <label htmlFor="goal">Duration of Workout in Minutes: </label>
                <input onChange={handleTimeChange} type="text" id="time" name="time" value={time} /><br></br><br></br>
                <hr></hr>
                {
                    exercises.map((exercise, index) => {
                        return (
                            <div id="exer" key={index}>
                                <label htmlFor="set">Sets </label>
                                <input className="setrep" onChange={(event) => handleExerciseChange(event, index, "sets")}  
                                id="set" name="set" value={exercise.sets} />
                                <label htmlFor="rep">Reps </label>
                                <input className="setrep" onChange={(event) => handleExerciseChange(event, index, "reps")}  
                                id="rep" name="rep" value={exercise.reps} />
                                <label htmlFor="exercise">Exercise Name </label>
                                <input onChange={(event) => handleExerciseChange(event, index, "name")}  
                                id="exercise" name="exercise" value={exercise.name} />
                                <p onClick={() => handleRemove(index)} id="delete" style={{display:"inline"}}><strong>X</strong></p> 
                            </div>
                        )
                    })
                }
                <button onClick={handleAddExercise}>Add Exercise</button>
                <hr></hr>
                <label htmlFor="start">Date Workout was completed: </label>
                <input onChange={handleDateChange} type="date" id="date" name="date" selected={date} /><br></br><br></br>
                <input type="submit" />
            </form>
        </div>
    );
}

export default WorkoutForm;