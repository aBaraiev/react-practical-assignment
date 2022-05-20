import React from 'react';
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {userLogout} from "../redux/actions/userActions";
import {showModal} from "../redux/actions/modalWindowActions";
import {ADD_POST_MODAL} from "../constants/modalWindowTypes";

const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.currentUser);

    const handleShowAddPostModal = () => dispatch(showModal(ADD_POST_MODAL));

    const handleLogout = () => {
        dispatch(userLogout())
        navigate('/login');
    }

    return (
        <header className='p-3 bg-dark mb-3 d-flex justify-content-between align-items-center'>
            <h5 className='text-light'>{currentUser}</h5>
            <button className='btn btn-warning'
                    onClick={handleShowAddPostModal}
            >
                Add post
            </button>
            <button className='btn btn-danger'
                    onClick={handleLogout}
            >
                Logout
            </button>
        </header>
    );
};

export default Header;