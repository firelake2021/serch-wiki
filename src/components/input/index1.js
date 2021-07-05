import React from './node_modules/react';

import './styles.css'

const Input = ({placeholder}, ...rest) => <input className="input-field" placeholder={placeholder}  {...rest}/>


export default Input;