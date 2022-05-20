import axios from "axios";
import {UPDATE_POST_BY_ID_URL} from "../constants/urls";

export const updatePostByIdApiCall = (id, title, likes, dislikes) =>
    axios.put(
        `${UPDATE_POST_BY_ID_URL}${id}`,
        {title, likes, dislikes},
    )

