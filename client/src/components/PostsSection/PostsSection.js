import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPostsByPage} from "../../redux/actions/postActions"
import Post from "./Post/Post";

const PostsSection = () => {

    const posts = useSelector(state => state.posts.posts);
    const currentPage = useSelector(state => state.posts.currentPage);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPostsByPage(currentPage))
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