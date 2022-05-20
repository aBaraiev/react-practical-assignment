import {useState} from 'react';

const useImageInput = (initialInput) => {
    const [image, setImage] = useState(initialInput);
    return [image, e => {
        if (e.target.files.length) {
            if (e.target.files[0].type.split('/')[0] === 'image') {
                setImage({value: e.target.value, img: e.target.files[0]})
            } else {
                alert('Sorry, only images are allowed')
                setImage({value: '', img: ''})
            }
        }
    }];
}

export default useImageInput;