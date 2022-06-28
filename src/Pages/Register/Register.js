import React, { useState } from 'react';
import auth from '../../firebase.init';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,

    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const navigateLogin = () => {
        navigate('/login');
    }

    if (user) {
        navigate('/home');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        if (password.length < 6) {
            setError("password length must be greater than 6 character!");
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='register-form w-50 mx-auto p-2 mb-4'>
            <h2 style={{ fontFamily: 'Mate SC', fontSize: "30px", color: "darkmagenta" }} className='text-center  '>Please Register</h2>
            <Form style={{ fontFamily: 'Mate SC' }} className='d-flex flex-column' onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" name="name" placeholder="Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <p style={{ color: "red" }}>{error}</p>
                <Button className="w-50 mx-auto" variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p style={{ fontFamily: 'Concert One' }}>Already have an account? <Link to="/login" style={{ fontFamily: 'Concert One' }} className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
        </div>
    );
};

export default Register;