import React, { useState,useContext } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { appContext } from "../../appContext";
export default function Login() {
const {setUser,  setToken, userEmail, setUserEmail} = useContext(appContext)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const login = async (e) => {
        e.preventDefault()
        const res = await axios.post(`http://localhost:8080/login`, {email,password});
        if(res.data){
            setUser(res.data.user)
            setToken(res.data.token)
            setUserEmail(res.data.email)
            navigate('/')

        }
    }

    return (
        <>
        <h1>Log In</h1>
        <Form className="containerlogin">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address:</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <Button className="loginbutton" variant="primary" type="submit" onClick={login}>
               Log In
            </Button>
        </Form>
        </>
    )
}