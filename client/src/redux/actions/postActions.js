export const UPLOAD_POST = 'UPLOAD_POST';
export const UPLOAD_POST_IMAGE = 'UPLOAD_POST_IMAGE';
export const GET_POSTS_BY_PAGE = 'GET_POSTS_BY_PAGE';
export const UPDATE_POSTS_IN_STORAGE = 'UPDATE_POSTS_IN_STORAGE';
export const UPDATE_POST_IMAGE_IN_STORAGE = 'UPDATE_POST_IMAGE_IN_STORAGE';
export const DELETE_POST_ON_SERVER = 'DELETE_POST_ON_SERVER';
export const DELETE_POST_FROM_STORAGE = 'DELETE_POST_FROM_STORAGE';
export const UPDATE_POST_BY_ID_ON_SERVER = 'UPDATE_POST_BY_ID_ON_SERVER';
export const UPDATE_POST_BY_ID_IN_STORAGE = 'UPDATE_POST_BY_ID_IN_STORAGE'

export const uploadPost = (postTitle, username) => ({type: UPLOAD_POST, payload: {postTitle, username}});
export const uploadPostImage = (id, postImage) => ({type: UPLOAD_POST_IMAGE, payload: {id, postImage}});
export const getPostsByPage = (pageNo) => ({type: GET_POSTS_BY_PAGE, payload: pageNo});
export const updatePostsInStorage = (postsChunk) => (
    {
        type: UPDATE_POSTS_IN_STORAGE,
        payload: postsChunk
    }
);

export const updatePostImageInStorage = (post) => (
    {
        type: UPDATE_POST_IMAGE_IN_STORAGE,
        payload: post
    }
)

export const deletePost = (id) => ({type: DELETE_POST_ON_SERVER, payload: id});
export const deletePostFromStorage = (id) => ({type: DELETE_POST_FROM_STORAGE, payload: id});
export const updatePostById = ({id, title, likes, dislikes}) => (
    {
        type: UPDATE_POST_BY_ID_ON_SERVER,
        payload: {id, title, likes, dislikes}
    }
)
// NB! response does not contain img link
export const updatePostByIdInStorage = (postData) => (
    {
        type: UPDATE_POST_BY_ID_IN_STORAGE,
        payload: postData
    }
)