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
        setExercises([...exercises, ""]);
    }

    function handleExerciseChange(event, index) {
        exercises[index] = event.target.value;
        setExercises([...exercises]);
    }

    return(
        <form className="goalForm" onSubmit={handleSubmit}>
            <h3>Add a Workout</h3><br></br>
            <label htmlFor="name">Name of Workout: </label>
            <input onChange={handleNameChange} type="text" id="name" name="name" value={name} /><br></br><br></br>
            <label htmlFor="goal">Time to Complete Workout: </label>
            <input onChange={handleTimeChange} type="text" id="time" name="time" value={time} /><br></br><br></br>
            <hr></hr>
            {
                exercises.map((exercise, index) => {
                    return (
                        <div key={index}>
                            <input onChange={(event) => handleExerciseChange(event, index)}  
                            value={exercise} />
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