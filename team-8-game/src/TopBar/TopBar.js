import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router";


export default function TopBar() {

    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/');
    }
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>Welcome to Tetris By Team 8</Navbar.Brand>
                </LinkContainer>
                <LinkContainer to="/highscores">
                            <Nav.Link>High Scores</Nav.Link>
                        </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/signup">
                            <Nav.Link>Sign Up</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/login">
                            <Nav.Link>Log In</Nav.Link>
                        </LinkContainer>
                     
                       
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}