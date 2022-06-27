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
    }
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className='w-50 bg-primary'></div>
                <p className='px-2 mt-2'>or</p>
                <div style={{ height: "1px" }} className='w-50 bg-primary'></div>

            </div>
            {errorMessage}
            <div >
                <button onClick={() => signInWithGoogle()} className='btn btn-primary w-50'>
                    <img src="https://cdn.icon-icons.com/icons2/729/PNG/128/google_icon-icons.com_62736.png" style={{ width: "20px", marginRight: "6px" }} alt="" />
                    Google Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;