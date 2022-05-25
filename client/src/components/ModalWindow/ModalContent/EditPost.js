import React, {useEffect, useRef} from 'react';
import {hideModal} from "../../../redux/actions/modalWindowActions";
import {useDispatch, useSelector} from "react-redux";
import useTextInput from "../../../hooks/useTextInput";
import useImageInput from "../../../hooks/useImageInput";
import {
    updatePostDataOnServer,
    uploadPostImageOnServer,
} from "../../../redux/actions/post_actions/async_post_actions";

const EditPost = () => {

    const dispatch = useDispatch();
    const initialPostState = useSelector(state => state.modal.postToBeEdited);
    const [postTitle, setPostTitle] = useTextInput(initialPostState.title);
    const [postImage, setPostImage] = useImageInput({value: '', img: ''});
    const inputField = useRef();

    useEffect(() => {
        inputField.current.focus();
    }, [])

    const handleUpdatePost = () => {
        const title = postTitle.trim();
        if (title) {
            const postData = {title: postTitle, id: initialPostState.id}
            dispatch(updatePostDataOnServer(postData));
            if (postImage.img) {
                console.log(initialPostState.id)
                dispatch(uploadPostImageOnServer(initialPostState.id, postImage.img))
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
                        <h5 className='modal-title'>Edit Post</h5>
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
                                onClick={handleUpdatePost}
                        >
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditPost;