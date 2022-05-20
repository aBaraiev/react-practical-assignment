import {useState} from 'react';

const useTextInput = (initialInput) => {
    const [input, setInput] = useState(initialInput);
    return [input, e => setInput(e.target.value)];
}

export default useTextInput;