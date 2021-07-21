import React from 'react';

const CheckBox = (props) => {
    const checkedValue = (e) => {
        props.onChange(e.target.value);
    }
    return (
        <label htmlFor={props.label+'-'+props.name} className={`checkbox ${props.type ? 'checkbox--'+props.type: ''}`}>
            <input name={props.name} onChange={checkedValue} type="checkbox" id={props.label+'-'+props.name} value={props.value}/>
            <span className="checkbox__check"/>
            <p>{props.label}</p>
        </label>
    )
}

export default CheckBox;