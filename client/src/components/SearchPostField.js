import React from 'react';
import useTextInput from "../hooks/useTextInput";

const SearchPostField = () => {

    const [input, handleInput] = useTextInput('');

    return (
        <section id='search' className='text-center'>
            <div className='input-group w-75 m-auto mb-3'>
                <input className='form-control border-dark'
                       type='text'
                       placeholder='What do you want to find?'
                       value={input}
                       onChange={handleInput}
                />
                <button className='btn btn-secondary'>Button</button>
            </div>
        </section>
    );
};

export default SearchPostField;