import {applyMiddleware, combineReducers, createStore} from "redux";
import userReducer from "./userReducer";
import {modalReducer} from "./modalReducer";
import createSagaMiddleWare from 'redux-saga';
import {rootWatcher} from "../saga";
import {postsReducer} from "./postsReducer";

const sagaMiddleware = createSagaMiddleWare();

const rootReducer = combineReducers({
    user: userReducer,
    modal: modalReducer,
    posts: postsReducer,
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);