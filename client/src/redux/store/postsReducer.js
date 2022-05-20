import {
    DELETE_POST_FROM_STORAGE,
    UPDATE_POST_BY_ID_IN_STORAGE,
    UPDATE_POST_IMAGE_IN_STORAGE,
    UPDATE_POSTS_IN_STORAGE
} from "../actions/postActions";

const defaultState = {
    currentPage: 1,
    posts: []
}

export const postsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_POSTS_IN_STORAGE:
            return {...state, posts: [...action.payload]}
        case DELETE_POST_FROM_STORAGE:
            return {...state, posts: [...state.posts.filter(p => p.id !== action.payload)]}
        case UPDATE_POST_IMAGE_IN_STORAGE:
            return {
                ...state,
                posts: [...state.posts.filter(p => p.id !== action.payload.id), action.payload]
            }
        case UPDATE_POST_BY_ID_IN_STORAGE: {
            return {
                ...state,
                posts: [...state.posts.map(p => {
                    if (p.id === action.payload.id) {
                        return {p, ...action.payload}
                    }
                    return p;
                })]
            }
        }

        default:
            return state
    }
}