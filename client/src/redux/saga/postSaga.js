import {put, takeEvery, call} from 'redux-saga/effects'
import {
    DELETE_POST_ON_SERVER, deletePostFromStorage,
    GET_POSTS_BY_PAGE, UPDATE_POST_BY_ID_ON_SERVER, updatePostByIdInStorage, updatePostImageInStorage,
    updatePostsInStorage,
    UPLOAD_POST,
    UPLOAD_POST_IMAGE
} from "../actions/postActions";
import {uploadUserPostApiCall} from "../../api/uploadUserPostApiCall";
import {getPostsByPageApiCall} from "../../api/getPostsByPageApiCall";
import {deletePostByIdApiCall} from "../../api/deletePostByIdApiCall";
import {uploadPostImageApiCall} from "../../api/uploadPostImageApiCall";
import {updatePostByIdApiCall} from "../../api/updatePostByIdApiCall";

function* uploadPostWorker({payload}) {
    const resp = yield call(uploadUserPostApiCall,payload.postTitle, payload.username);
    yield put(updatePostImageInStorage(resp.data.result));
}

function* uploadPostImageWorker({payload}) {
    const resp = yield call(uploadPostImageApiCall, payload.id, payload.postImage);
    yield put(updatePostImageInStorage(resp.data.result));
}

function* getPostsByPageWorker({payload}) {
    const resp = yield call(getPostsByPageApiCall, payload);
    const postsChunk = yield resp.data.result;
    yield put(updatePostsInStorage(postsChunk));
}

function* deletePostByIdWorker({payload}) {
    const resp = yield call(deletePostByIdApiCall, payload);
    const id = yield resp.data.result.id;
    yield put(deletePostFromStorage(id));
}

function* updatePostByIdWorker({payload}) {
    const resp = yield call(updatePostByIdApiCall,
        payload.id, payload.title, payload.likes, payload.dislikes);
    const postData = yield resp.data.result;
    yield put(updatePostByIdInStorage(postData));
}

export function* postWatcher() {
    yield takeEvery(UPLOAD_POST, uploadPostWorker)
    yield takeEvery(UPLOAD_POST_IMAGE, uploadPostImageWorker)
    yield takeEvery(GET_POSTS_BY_PAGE, getPostsByPageWorker)
    yield takeEvery(DELETE_POST_ON_SERVER, deletePostByIdWorker)
    yield takeEvery(UPDATE_POST_BY_ID_ON_SERVER, updatePostByIdWorker)
}