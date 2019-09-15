import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import './App.css';
import logo from './logo.jpg';

function App() {
    return (
        <section className="App">
            <header>
                <h1>Task Master</h1>
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
            <main>
                <Container fluid={true}>
                    <Row noGutters={true}>
                        <Button id='new-task' variant="primary">Create New Task</Button>
                    </Row>
                    <Row noGutters={true}>
                        <h2>Monitor Tasks</h2>
                    </Row>
                </Container>
            </main>
        </section>
    );
}

export default App;
