import axios from "axios";
import {UPLOAD_POST_IMAGE_URL} from "../constants/urls";

export const uploadPostImageApiCall = (id, img) => {
    const formData = new FormData();
    formData.append('picture', img);
    return axios.post(
        `${UPLOAD_POST_IMAGE_URL}${id}/picture`,
        formData
    )
}