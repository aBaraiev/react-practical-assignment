import {LOGIN, LOGOUT} from "../actions/userActions";

const CURRENT_USER = 'CURRENT_USER';

const defaultState = {
    currentUser: localStorage.getItem(CURRENT_USER)
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case LOGIN: {
            localStorage.setItem(CURRENT_USER, action.payload)
            return {...state, currentUser: action.payload}
        }
        case LOGOUT: {
            localStorage.removeItem(CURRENT_USER)
            return {...state, currentUser: null}
        }
        default:
            return state;
    }
}