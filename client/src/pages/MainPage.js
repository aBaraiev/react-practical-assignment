import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router";
import Header from "../components/Header";
import SearchPostField from "../components/SearchPostField";
import ModalWindow from "../components/ModalWindow/ModalWindow";
import PostsSection from "../components/PostsSection/PostsSection";

const MainPage = () => {

    const currentUser = useSelector(state => state.user.currentUser);
    const navigate = useNavigate();

    useEffect(() => {
        if (!currentUser)
            navigate('/login');
    }, [currentUser])

    return (
        <div>
            <ModalWindow/>
            <Header/>
            <SearchPostField/>
            <PostsSection/>
        </div>
    );
};

export default MainPage;