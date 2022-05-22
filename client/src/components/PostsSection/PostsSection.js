import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Post from "./Post/Post";
import {getAllPostsFromServer} from "../../redux/actions/post_actions/async_post_actions";

const PostsSection = () => {

    const posts = useSelector(state => state.posts.posts);
    const currentPage = useSelector(state => state.posts.currentPage);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPostsFromServer(currentPage))
    }, [currentPage])

    return (
        <section id='posts' className='m-3 d-flex flex-wrap justify-content-center'>
            {
                posts.map((post, i) => <Post key={i} {...post}/>)
            }
        </section>
    );
};

export default PostsSection;