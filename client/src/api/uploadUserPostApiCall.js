import axios from "axios";
import {UPLOAD_POST_URL} from "../constants/urls";

export const uploadUserPostApiCall = (title, username) =>
    axios.post(
        UPLOAD_POST_URL,
        {title, username},
        {headers: {'Content-type': 'application/json'}}
    )
