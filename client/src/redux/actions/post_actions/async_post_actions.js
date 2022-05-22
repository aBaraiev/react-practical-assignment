export const UPLOAD_POST_ON_SERVER = 'UPLOAD_POST_ON_SERVER';
export const UPLOAD_POST_IMAGE_ON_SERVER = 'UPLOAD_POST_IMAGE_ON_SERVER';
export const UPDATE_POST_DATA_ON_SERVER = 'UPDATE_POST_DATA_ON SERVER';
export const DELETE_POST_FROM_SERVER = 'DELETE_POST_FROM_SERVER';
export const GET_ALL_POSTS_FROM_SERVER = 'GET_ALL_POSTS_FROM_SERVER';

export const uploadPostOnServer = (title, username) => (
    {
        type: UPLOAD_POST_ON_SERVER,
        payload: {title, username}
    }
)

export const uploadPostImageOnServer = (id ,img) => (
    {
        type: UPLOAD_POST_IMAGE_ON_SERVER,
        payload: {id, img}
    }
)

export const getAllPostsFromServer = (pageNo) => (
    {
        type: GET_ALL_POSTS_FROM_SERVER,
        payload: pageNo
    }
)

export const deletePostFromServer = (postId) => (
    {
        type: DELETE_POST_FROM_SERVER,
        payload: postId
    }
)

export const updatePostDataOnServer = (postData) => (
    {
        type: UPDATE_POST_DATA_ON_SERVER,
        payload: postData
    }
)
