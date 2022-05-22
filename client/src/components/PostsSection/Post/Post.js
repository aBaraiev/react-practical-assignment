import React from 'react';
import './Post.css';
import {convertMsToDate} from "../../../helpers/convertMsToDate";
import {useDispatch, useSelector} from "react-redux";
import {deletePostFromServer, updatePostDataOnServer} from "../../../redux/actions/post_actions/async_post_actions";

const Post = React.memo(({id, title, username, likes, dislikes, date, imageSrc}) => {

    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.currentUser)
    const isLikedByCurrentUser = likes.some(u => u === currentUser);
    const isDislikedByCurrentUser = dislikes.some(u => u === currentUser);

    const handleDeletePost = () => {
        dispatch(deletePostFromServer(id));
    }

    const handleLikeClick = () => {
        dispatch(updatePostDataOnServer({
                id,
                likes: [...likes, currentUser],
                dislikes: [...dislikes].filter(u => u !== currentUser)
            }
        ))
    }

    const handleDislikeClick = () => {
        dispatch(updatePostDataOnServer({
                id,
                likes: [...likes].filter(u => u !== currentUser),
                dislikes: [...dislikes, currentUser]
            }
        ))
    }

    return (
        <div className='card m-3 p-3 w-25 text-center'>
            <div className='post__img-container d-flex justify-content-center align-items-center'>
                {
                    imageSrc
                        ?
                        <img src={imageSrc} className='card-img-top post__img' alt=''/>
                        :
                        <i>No image</i>
                }
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-text">{username}</h6>
                <div className='d-flex justify-content-between'>
                    <p>Votes: {likes.length - dislikes.length}</p>
                    <p>Date: {convertMsToDate(date)}</p>
                </div>
            </div>
            <div className='d-flex justify-content-between'>
                <div className='p-2 d-flex justify-content-start w-50'>
                    <button className='btn btn-success me-2'
                            disabled={isLikedByCurrentUser}
                            onClick={handleLikeClick}
                    >
                        Like
                    </button>
                    <button className='btn btn-secondary'
                            disabled={isDislikedByCurrentUser}
                            onClick={handleDislikeClick}
                    >
                        Dislike
                    </button>
                </div>
                {
                    (currentUser === username)
                    &&
                    <div className='p-2 d-flex justify-content-end w-50'>
                        <button className='btn btn-warning me-2'>Edit</button>
                        <button className='btn btn-danger'
                                onClick={handleDeletePost}
                        >
                            Delete
                        </button>
                    </div>
                }
            </div>
            <button className='btn btn-link'>
                Show comments
            </button>
            {/*<ul className="list-group list-group-flush">*/}
            {/*    <li className="list-group-item">An item</li>*/}
            {/*    <li className="list-group-item">A second item</li>*/}
            {/*    <li className="list-group-item">A third item</li>*/}
            {/*</ul>*/}
        </div>
    );
});

export default Post;