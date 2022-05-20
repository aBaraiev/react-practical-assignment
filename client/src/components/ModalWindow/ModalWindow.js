import React from 'react';
import {useSelector} from "react-redux";
import {ADD_POST_MODAL} from "../../constants/modalWindowTypes";
import AddPost from "./ModalContent/AddPost";

const ModalWindow = ({reload}) => {

    const type = useSelector(state => state.modal.type)

    switch (type) {
        case ADD_POST_MODAL:
            return <AddPost reload={reload}/>
        default:
            return null;
    }


};

export default ModalWindow;