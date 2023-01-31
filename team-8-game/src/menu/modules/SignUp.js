import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import { httpCall } from "../../httpCall";


export default function SignUp() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const navigate = useNavigate();

    const register = async (e) => {
        e.preventDefault()
        await httpCall("signup", { firstName, lastName, nickname, email, password, confirm });
    }


    return (
        <Form className="container">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="password" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="password" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Nickname</Form.Label>
                <Form.Control type="password" placeholder="Nickname" value={nickname} onChange={(e) => setNickname(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="ConfirmPassword" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={register}>
                Submit
            </Button>
        </Form>

    )
}