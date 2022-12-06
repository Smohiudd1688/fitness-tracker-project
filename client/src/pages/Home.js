import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import GoalArea from "../components/GoalArea";

function Home() {
    return (
        <Container>
            <br></br><br></br><br></br>
            <Row>
                <h3 className="header">Welcome back, username!</h3>
            </Row><br></br>
            <Row>
                <h2 className="header">Weekly Workout Progress</h2>
            </Row><br></br>
            <Row>
                <Col>
                    <ProgressBar id="progress" variant="success" animated now={40} />
                </Col>
            </Row>
            <GoalArea />
        </Container>
    );
}

export default Home;