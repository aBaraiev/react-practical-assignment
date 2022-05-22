import React, {useEffect, useRef} from 'react';
import '../ModalWindow.css';
import useTextInput from "../../../hooks/useTextInput";
import {useDispatch, useSelector} from "react-redux";
import {hideModal} from "../../../redux/actions/modalWindowActions";
import useImageInput from "../../../hooks/useImageInput";
import {uploadPostImageOnServer, uploadPostOnServer} from "../../../redux/actions/post_actions/async_post_actions";

const AddPost = ({text = ''}) => {

    const [postTitle, setPostTitle] = useTextInput(text);
    const [postImage, setPostImage] = useImageInput({value: '', img: ''});
    const posts = useSelector(state => state.posts.posts);
    const username = useSelector(state => state.user.currentUser);
    const dispatch = useDispatch();
    const inputField = useRef();

    useEffect(() => {
        inputField.current.focus();
    }, [])

    const handleCreatePost = () => {
        const title = postTitle.trim();
        if (title) {
            dispatch(uploadPostOnServer(postTitle, username));
            if (postImage.img) {
                let id = 1;
                if (posts.length > 0)
                    id = posts[posts.length - 1].id + 1
                dispatch(uploadPostImageOnServer(id, postImage.img))
            }
            dispatch(hideModal());
        } else {
            alert('Post title can not be blank');
        }
    }

    return (
        <div className='modal-overlay'>
            <div className='modal-dialog modal-dialog-centered position-absolute'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className='modal-title'>Create Post</h5>
                        <button className='btn-close'
                                onClick={() => dispatch(hideModal())}
                        />
                    </div>
                    <div className='modal-body'>
                        <input type='text'
                               className='form-control mb-3'
                               placeholder='Your Post Title'
                               value={postTitle}
                               onChange={setPostTitle}
                               ref={inputField}
                        />
                        <div>
                            <input type='file'
                                   className='form-control'
                                   value={postImage.value}
                                   onChange={(e) => setPostImage(e)}/>
                        </div>
                    </div>
                    <div className='modal-footer'>
                        <button type='button'
                                className='btn btn-primary'
                                onClick={handleCreatePost}
                        >
                            Upload
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AddPost;