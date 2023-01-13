import React, {useState} from "react";

function GoalForm({userId, goals, setGoals}) {
    const [errors, setErrors] = useState([]);
    const [title, setTitle] = useState("");
    const [starting, setStarting] = useState("");
    const [goal, setGoal] = useState("");
    const [endDate, setEndDate] = useState(new Date());

    const today = (new Date()).toISOString().split('T')[0];

    function handleSubmit(event) {
        event.preventDefault();
        setErrors([]);

        const newGoal = {
            title: title,
            starting: starting,
            current: starting,
            completed: false,
            goal: goal,
            end_date: endDate,
            user_id: userId
        }

        fetch('/goals', {
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(newGoal)
        })
        .then(res => {
            if(res.ok) {
                res.json().then(resGoal => setGoals([...goals, resGoal]))
            } else {
                res.json().then(e => setErrors(e.errors))
            }
        })

        setTitle("");
        setGoal("");
        setStarting("");
        setEndDate("");
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

    const renderErrors = errors.map((error, index) => {
        return (
            <p className="errors" key={index}>* {error}</p>
        );
    })

    return (
        <div>
            {errors.length !== 0 ? renderErrors : null}
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
        </div>
    );

}

export default GoalForm;