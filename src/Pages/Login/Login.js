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
import './Login.css';
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
        const { data } = await axios.post('https://nameless-woodland-97201.herokuapp.com/login', { email });
        localStorage.setItem('accessToken', data.accessToken);

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
    if (user) {
        navigate(from, { replace: true });
    }


    if (loading) {
        return <Loading></Loading>;
    }
    return (
        <div className="w-50 mx-auto p-2 mb-5">
            <h5 className='text-center text-success title' >Please Login</h5>

            {/* login form  */}

            <Form style={{ fontFamily: 'Mate SC' }} className="d-flex flex-column " onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" ref={emailRef} name="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" className="w-50 mx-auto" type="submit">
                    Login
                </Button>
            </Form>

            {/* Error message display if have any */}

            {errorMessage}

            <p style={{ fontFamily: 'Mate SC', fontSize: "16px" }}>New to Bicycle Warehouse Management? <Link to="/register" className='text-primary pe-auto text-decoration-none' style={{ fontFamily: 'Concert One' }} onClick={navigateRegister}>Please Register</Link> </p>
            <p style={{ fontFamily: 'Mate SC' }}>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' style={{ fontFamily: 'Concert One' }} onClick={resetPassword}>Reset Password</button> </p>

            {/* for social login part */}

            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;