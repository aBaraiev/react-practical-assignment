export const HIDE_MODAL = 'HIDE_MODAL';
export const SHOW_MODAL = 'SHOW_MODAL';
export const SET_POST_TITLE_TO_BE_EDITED = 'SET_POST_TITLE_TO_BE_EDITED';

export const hideModal = () => ({type: HIDE_MODAL})
export const showModal = (payload) => ({type: SHOW_MODAL, payload})
export const setPostToBeEdited = (payload) => ({type: SET_POST_TITLE_TO_BE_EDITED, payload});