import {Navigate} from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import ErrorPage from "../pages/ErrorPage";

export const routes = [
    {
        path: '/',
        element: <Navigate to='home' replace/>
    },
    {
        path: 'home',
        element: <MainPage/>
    },
    {
        path: 'login',
        element: <LoginPage/>
    },
    {
        path: '*',
        element: <ErrorPage/>
    }
]