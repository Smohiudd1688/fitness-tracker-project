import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import GoalArea from "../components/GoalArea";


function Home() {
    const goals = [
        {
            name: "Lose Weight",
            starting: 170,
            current: 160,
            goal: 140,
            endDate: "January 21, 2022"
        },
        {
            name: "Lose Weight",
            starting: 170,
            current: 160,
            goal: 140,
            endDate: "January 21, 2022"
        },
        {
            name: "Lose Weight",
            starting: 170,
            current: 160,
            goal: 140,
            endDate: "January 21, 2022"
        },
        {
            name: "Lose Weight",
            starting: 170,
            current: 160,
            goal: 140,
            endDate: "January 21, 2022"
        }
    ]

    const renderCards = () => {
        for (let i = 0; i < goals.length; i++)
    }

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
                    <ProgressBar id="progress" variant="success" animated now={40} />
                </Col>
            </Row><br></br>
            <Row>
                <h1 className="header">Current Goals</h1>
            </Row>
            <GoalArea />
        </Container>
    );
}

export default Home;