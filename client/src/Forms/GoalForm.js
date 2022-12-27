import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function GoalForm() {
     
    const [title, setTitle] = useState("");
    const [starting, setStarting] = useState();
    const [goal, setGoal] = useState();
    const [endDate, setEndDate] = useState(new Date());

    const today = (new Date()).toISOString().split('T')[0];

    function handleSubmit(event) {
        event.preventDefault();

        console.log(title);
        console.log(starting);
        console.log(goal);
        console.log(endDate);
    }

    function handleTitleChange(event) {
        setTitle(event.target.value);
    }

    function handleGoalChange(event) {
        setGoal(event.target.value);
    }

    function handleStartChange(event) {
        setStarting(event.target.value);
    }

    function handleDateChange(event) {
        setEndDate(event.target.value);
    }

    return (
        <form className="goalForm" onSubmit={handleSubmit}>
            <h3>Add a Goal to Track</h3><br></br>
            <label htmlFor="title">What is your fitness goal? </label>
            <input onChange={handleTitleChange} type="text" id="title" name="title" value={title} /><br></br><br></br>
            <label htmlFor="goal">What is your goal number? </label>
            <input onChange={handleGoalChange} type="text" id="goal" name="goal" value={goal} /><br></br><br></br>
            <label htmlFor="start">What are you starting at? </label>
            <input onChange={handleStartChange} type="text" id="start" name="start" value={starting} /><br></br><br></br>
            <label htmlFor="date">When do you want to complete your goal? </label>
            <input onChange={handleDateChange} type="date" id="date" name="date" min={today} selected={endDate} /><br></br><br></br>
            <input type="submit" />
        </form>
    );

}

export default GoalForm;