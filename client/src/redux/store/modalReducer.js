import {HIDE_MODAL, SHOW_MODAL} from "../actions/modalWindowActions";

const defaultState = {
    type: null
}

export const modalReducer = (state = defaultState, action) => {

    switch (action.type) {
        case HIDE_MODAL:
            return {...state, type: null}
        case SHOW_MODAL:
            return {...state, type: action.payload}
        default:
            return state
    }
}