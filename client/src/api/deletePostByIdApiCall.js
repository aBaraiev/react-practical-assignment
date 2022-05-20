import axios from "axios";
import {DELETE_POST_BY_ID_URL} from "../constants/urls";

export const deletePostByIdApiCall = (id) =>
    axios.delete(`${DELETE_POST_BY_ID_URL}${id}`);