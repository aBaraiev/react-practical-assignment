export const CREATE_POST = 'CREATE_POST';
export const UPDATE_POST_IMAGE = 'UPDATE_POST_IMAGE';
export const UPDATE_POST_DATA = 'UPDATE_POST_DATA';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_ALL_POSTS = 'UPDATE_ALL_POSTS';

export const createPost = (post) => ({type: CREATE_POST, payload: post});
export const updatePostImage = (id, imageSrc) => ({type: UPDATE_POST_IMAGE, payload: {id, imageSrc}});
export const updatePostData = (data) => ({type: UPDATE_POST_DATA, payload: data});
export const deletePost = (postId) => ({type: DELETE_POST, payload: postId});
export const updateAllPosts = (posts) => ({type: UPDATE_ALL_POSTS, payload: posts});

