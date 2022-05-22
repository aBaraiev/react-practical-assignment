import {
    CREATE_POST,
    DELETE_POST,
    UPDATE_ALL_POSTS, UPDATE_POST_DATA,
    UPDATE_POST_IMAGE
} from "../actions/post_actions/sync_post_actions";

const defaultState = {
    currentPage: 1,
    posts: []
}

export const postsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CREATE_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload]
                    .sort((p1, p2) => p1.id - p2.id)
            }
        case UPDATE_POST_IMAGE:
            return {
                ...state,
                posts: [...state.posts]
                    .map(p => p.id === action.payload.id
                        ?
                        {...p, imageSrc: action.payload.imageSrc}
                        :
                        p
                    )
            }
        case UPDATE_POST_DATA:
            return {
                ...state,
                posts: [...state.posts]
                    .map(p => p.id === action.payload.id
                        ?
                        {...p, ...action.payload}
                        :
                        p)
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.payload)
            }
        case UPDATE_ALL_POSTS:
            return {
                ...state,
                posts: [...action.payload]
            }
        default:
            return state
    }
}