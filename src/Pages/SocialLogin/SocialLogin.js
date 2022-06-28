import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorMessage;
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (error) {


        errorMessage = <div>
            <p>Error: {error.message}</p>
        </div>
            ;
    }
    if (user) {
        navigate(from, { replace: true });
        console.log(user);
    }
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px", background: "linear-gradient(rgb(255, 101, 101),rgb(255, 191, 93))" }} className='w-50'></div>
                <p className='px-2 mt-2'>or</p>
                <div style={{ height: "1px" }} className='w-50 bg-primary'></div>

            </div>
            {errorMessage}
            <div >
                <button onClick={() => signInWithGoogle()} className='btn btn-primary mb-5'>
                    <img src="https://cdn.icon-icons.com/icons2/729/PNG/128/google_icon-icons.com_62736.png" style={{ width: "15px", marginRight: "6px" }} alt="" />
                    Google Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;