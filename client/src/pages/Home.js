import React, {useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import GoalItem from "../components/GoalItem";
import GoalForm from "../Forms/GoalForm";


function Home({goals, setGoals, currentUser, setCurrentUser}) {

    useEffect(() => {
        const date = new Date();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        if (month !== currentUser.month || year !== currentUser.year) {
            fetch(`/users/${currentUser.id}`, {
                method: "PATCH",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify({
                    month: month,
                    year: year,
                    current: 0
                })
            })
            .then(res => res.json())
            .then(data => setCurrentUser(data))
        }
    }, []);

    const renderGoals = goals.map(goal => {
        return <Col key={goal.id}><GoalItem 
                        id={goal.id}
                        title={goal.title}
                        starting={goal.starting}
                        current={goal.current}
                        completed={goal.completed}
                        goal={goal.goal}
                        endDate={goal.end_date}
                        goals={goals}
                        setGoals={setGoals}
        /></Col>
    });

    return (
        <Container fluid="xxl">
            <br></br><br></br>
            <Row>
                <h3 className="header">Welcome back, {currentUser.first_name}!</h3>
            </Row>
            <Row>
                <h1 className="header">Monthly Workout Progress</h1>
            </Row>
            <Row>
                <Col>
                    <ProgressBar id="progress" animated now={(currentUser.current / currentUser.monthly_goal) * 100} />
                </Col>
            </Row><br></br>
            <Row>
                <h1 className="header">Current Goals</h1>
            </Row>
            <Row id="goalRow">
                {renderGoals}
            </Row>
            <Row>
                <GoalForm goals={goals} setGoals={setGoals} />
            </Row>
        </Container>
    );
}

export default Home;