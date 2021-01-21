import React, { useState } from 'react';

const Form = (props) => {
    const [input, setInput] = useState("");

    const handleChange = (e) => {
        const { value } = e.target;
        setInput(value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addColor(input) 
        setInput("")
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="colored input">Color: </label>
                <input type="text" onChange={handleChange} value={input} />
            </div>
            <button type="submit">Add</button>
        </form>
    );
};

export default Form;