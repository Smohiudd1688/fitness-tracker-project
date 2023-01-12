import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import GoalItem from "../components/GoalItem";
import GoalForm from "../Forms/GoalForm";


function Home({currentUser, goals, setGoals}) {
    console.log(goals)

    const renderGoals = goals.map(goal => {
        return <Col key={goal.id}><GoalItem 
                        id={goal.id}
                        title={goal.title}
                        starting={goal.starting}
                        current={goal.current}
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
                    <ProgressBar id="progress" animated now={40} />
                </Col>
            </Row><br></br>
            <Row>
                <h1 className="header">Current Goals</h1>
            </Row>
            <Row id="goalRow">
                {renderGoals}
            </Row>
            <Row>
                <GoalForm userId={currentUser.id} goals={goals} setGoals={setGoals} />
            </Row>
        </Container>
    );
}

export default Home;