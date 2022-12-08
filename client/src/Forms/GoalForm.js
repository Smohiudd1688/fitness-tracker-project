import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function GoalForm() {
     
    const [title, setTitle] = useState("");
    const [starting, setStarting] = useState("");
    const [goal, setGoal] = useState("");
    const [endDate, setEndDate] = useState(new Date());

    const today = new Date();

    function handleSubmit(event) {
        event.preventDefault();
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

    return (
        <form className="logForms" onSubmit={handleSubmit}>
            <label htmlFor="title">What is your fitness goal? </label>
            <input onChange={handleTitleChange} type="text" id="title" name="title" value={title} /><br></br><br></br>
            <label htmlFor="goal">What is your goal? </label>
            <input onChange={handleGoalChange} type="text" id="goal" name="goal" value={goal} /><br></br><br></br>
            <label htmlFor="start">What are you starting at? </label>
            <input onChange={handleStartChange} type="text" id="start" name="start" value={starting} /><br></br><br></br>
            <label htmlFor="date">When do you want to completer your goal? </label>
            <input type="date" id="date" name="date" minDate={today} selected={endDate} onChange={endDate => setEndDate(endDate)} /><br></br><br></br>
            <input type="submit" />
        </form>
    );

}

export default GoalForm;

/* 
 const [title, setTitle] = useState("");
    const [starting, setStarting] = useState("");
    const [goal, setGoal] = useState("");
    const [endDate, setEndDate] = useState(new Date());

    const today = new Date();

    function handleSubmit(event) {
        event.preventDefault();
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

    return (
        <form className="logForm" onSubmit={handleSubmit}>
            <label htmlFor="title">What is your fitness goal? </label>
            <input onChange={handleTitleChange} type="text" id="title" name="title" value={title} />
            <label htmlFor="goal">What is your goal? </label>
            <input onChange={handleGoalChange} type="text" id="goal" name="goal" value={goal} />
            <label htmlFor="start">What are you starting at? </label>
            <input onChange={handleStartChange} type="text" id="start" name="start" value={starting} /><br></br><br></br>
            <label htmlFor="date">When do you want to completer your goal? </label>
            <DatePicker id="date" name="date" minDate={today} selected={endDate} onChange={endDate => setEndDate(endDate)} />
            <input type="submit" />
        </form>
    );
*/