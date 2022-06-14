import React from 'react';
import './InputText.css';
const InputText = ({placeholder,value,changeMethod}) => {
    return ( 
        <input type="text" placeholder={placeholder} value={value} onChange={changeMethod}/>
     );
}

export default InputText;