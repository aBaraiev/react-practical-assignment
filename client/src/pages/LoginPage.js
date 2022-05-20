import React, {useEffect} from 'react';
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import useTextInput from "../hooks/useTextInput";
import {userLogin} from "../redux/actions/userActions";

const LoginPage = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.currentUser);
    const [loginInput, handleLoginInput] = useTextInput('');

    useEffect(() => {
        if (currentUser)
            navigate('/home');
    }, [currentUser])

    const handleLogin = () => {
        if (loginInput.trim()) {
            dispatch(userLogin(loginInput));
            navigate('/home');
        } else {
            alert('Please, input login')
        }
    }

    return (
        <section id='login'
                 className='min-vh-100 m-auto w-50 bg-dark
                        d-flex flex-column align-items-center justify-content-center'
        >
            <input className='w-50 p-2 mb-3 text-center fs-5'
                   type='text'
                   placeholder='Type your login'
                   value={loginInput}
                   onChange={handleLoginInput}
            />
            <button className='btn btn-lg btn-danger w-50'
                    onClick={handleLogin}
            >
                Login
            </button>
        </section>
    );
};

export default LoginPage;