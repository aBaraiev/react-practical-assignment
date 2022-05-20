export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const userLogin = (userName) => ({type: LOGIN, payload: userName});
export const userLogout = () => ({type: LOGOUT})