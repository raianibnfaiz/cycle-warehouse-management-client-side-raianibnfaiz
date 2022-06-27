import React, { useRef, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let errorMessage;
    if (error) {
        errorMessage = <p className='text-danger p-3'>Error: {error?.message}</p>
    }


    const handleSubmit = async event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post('http://localhost:5000/login', { email });
        localStorage.setItem('accessToken', data.accessToken);
        navigate(from, { replace: true });
        console.log(data);
    }
    let from = location.state?.from?.pathname || "/";
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const resetPassword = async (event) => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email Has Been Sent! ');
        }
        else {
            toast('please input your email address');
        }
    }

    const navigateRegister = event => {
        navigate('/register');
    }


    if (loading) {
        return <Loading></Loading>;
    }
    return (
        <div className="w-50 mx-auto mt-5 mb-2 border p-3">
            <h2 className='text-center text-success'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" ref={emailRef} name="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            {errorMessage}
            <p>New to Bicycle Warehouse Management? <Link to="/register" className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>
            <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;