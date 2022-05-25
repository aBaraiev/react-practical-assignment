import {HIDE_MODAL, SET_POST_TITLE_TO_BE_EDITED, SHOW_MODAL} from "../actions/modalWindowActions";

const defaultState = {
    type: null,
    postToBeEdited: {id: null, title: ''}
}

export const modalReducer = (state = defaultState, action) => {

    switch (action.type) {
        case HIDE_MODAL:
            return {...state, type: null}
        case SHOW_MODAL:
            return {...state, type: action.payload}
        case SET_POST_TITLE_TO_BE_EDITED:
            return {...state, postToBeEdited: action.payload}
        default:
            return state
    }
}