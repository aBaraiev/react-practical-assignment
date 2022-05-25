import React from 'react';
import {useSelector} from "react-redux";
import {ADD_POST_MODAL, EDIT_POST_MODAL} from "../../constants/modalWindowTypes";
import AddPost from "./ModalContent/AddPost";
import EditPost from "./ModalContent/EditPost";

const ModalWindow = () => {

    const type = useSelector(state => state.modal.type)

    switch (type) {
        case ADD_POST_MODAL:
            return <AddPost/>
        case EDIT_POST_MODAL:
            return <EditPost />
        default:
            return null;
    }


};

export default ModalWindow;