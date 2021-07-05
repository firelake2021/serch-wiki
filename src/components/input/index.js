import React from 'react';
const Input = ({placeholder, ...rest}) => <input className="input-field" placeholder={placeholder} {...rest}/>

Input.defaultProps = {
    placeholder: 'Input search query',
};

export default Input;