import React, {useState} from "react";

function WorkoutForm() {
    const [name, setName] = useState("");
    const [time, setTime] = useState();
    const [date, setDate] = useState(new Date());
    const [exercises, setExercises] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();

        console.log(name);
        console.log(time);
        console.log(date);
        console.log(exercises);
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
        setExercises([...exercises, {
            name: "",
            sets: "",
            reps: ""
        }]);
    }

    function handleExerciseChange(event, index, property) {
        exercises[index][property] = event.target.value;
        setExercises([...exercises]);
        console.log(exercises);
    }

    return(
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
                            <input id="exName" onChange={(event) => handleExerciseChange(event, index, "name")}  
                            id="exercise" name="exercise" value={exercise.name} />
                            <p>x</p>
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
    );
}

export default WorkoutForm;