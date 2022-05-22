import {put, takeEvery, call} from 'redux-saga/effects'
import {uploadUserPostApiCall} from "../../api/uploadUserPostApiCall";
import {
    DELETE_POST_FROM_SERVER,
    GET_ALL_POSTS_FROM_SERVER, UPDATE_POST_DATA_ON_SERVER,
    UPLOAD_POST_IMAGE_ON_SERVER,
    UPLOAD_POST_ON_SERVER
} from "../actions/post_actions/async_post_actions";
import {
    createPost,
    deletePost,
    updateAllPosts,
    updatePostData,
    updatePostImage
} from "../actions/post_actions/sync_post_actions";
import {getPostsByPageApiCall} from "../../api/getPostsByPageApiCall";
import {deletePostByIdApiCall} from "../../api/deletePostByIdApiCall";
import {uploadPostImageApiCall} from "../../api/uploadPostImageApiCall";
import {updatePostByIdApiCall} from "../../api/updatePostByIdApiCall";

function* uploadPostWorker({payload}) {
    const resp = yield call(uploadUserPostApiCall, payload.title, payload.username);
    const post = yield resp.data.result;
    yield put(createPost(post));
}

function* uploadPostImageOnServerWorker({payload}) {
    const resp = yield call(uploadPostImageApiCall, payload.id, payload.img);
    const post = yield resp.data.result;
    yield put(updatePostImage(post.id, post.imageSrc));
}

function* updatePostDataOnServerWorker({payload}) {
    const {id, title, likes, dislikes} = payload;
    const resp = yield call(updatePostByIdApiCall, id, title, likes, dislikes)
    const data = yield resp.data.result;
    yield put(updatePostData(data))
}

function* getAllPostsFromServerWorker({payload}) {
    const resp = yield call(getPostsByPageApiCall, payload);
    const posts = yield resp.data.result;
    yield put(updateAllPosts(posts));
}

function* deletePostFromServerWorker({payload}) {
    const resp = yield call(deletePostByIdApiCall, payload);
    const id = yield resp.data.result.id;
    yield put(deletePost(id));
}


export function* postWatcher() {
    yield takeEvery(UPLOAD_POST_ON_SERVER, uploadPostWorker);
    yield takeEvery(GET_ALL_POSTS_FROM_SERVER, getAllPostsFromServerWorker);
    yield takeEvery(DELETE_POST_FROM_SERVER, deletePostFromServerWorker);
    yield takeEvery(UPLOAD_POST_IMAGE_ON_SERVER, uploadPostImageOnServerWorker);
    yield takeEvery(UPDATE_POST_DATA_ON_SERVER, updatePostDataOnServerWorker);
}