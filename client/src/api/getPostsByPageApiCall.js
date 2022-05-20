import axios from "axios";
import {GET_POSTS_BY_PAGE_URL} from "../constants/urls";

export const getPostsByPageApiCall = (pageNo) =>
    axios.get(`${GET_POSTS_BY_PAGE_URL}${pageNo}`);