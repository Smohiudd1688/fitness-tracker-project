import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import GoalItem from "../components/GoalItem";
import GoalForm from "../Forms/GoalForm";


function Home() {
    const goals = [
        {
            title: "Lose Weight",
            starting: 170,
            current: 160,
            goal: 140,
            endDate: "January 21, 2022"
        },
        {
            title: "Lose Weight",
            starting: 170,
            current: 160,
            goal: 140,
            endDate: "January 21, 2022"
        },
        {
            title: "Lose Weight",
            starting: 170,
            current: 160,
            goal: 140,
            endDate: "January 21, 2022"
        },
        {
            title: "Lose Weight",
            starting: 170,
            current: 160,
            goal: 140,
            endDate: "January 21, 2022"
        },
        {
            title: "Lose Weight",
            starting: 170,
            current: 160,
            goal: 140,
            endDate: "January 21, 2022"
        }
    ]

    const renderCards = goals.map(goal => {
        return <Col><GoalItem 
                        title={goal.title}
                        starting={goal.starting}
                        current={goal.current}
                        goal={goal.goal}
                        endDate={goal.endDate}
        /></Col>
    });

    return (
        <Container fluid="xxl">
            <br></br><br></br>
            <Row>
                <h3 className="header">Welcome back, name!</h3>
            </Row>
            <Row>
                <h1 className="header">Weekly Workout Progress</h1>
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
                {renderCards}
            </Row>
            <Row>
                <GoalForm />
            </Row>
        </Container>
    );
}

export default Home;