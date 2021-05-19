import React from 'react';

const CheckBox = (props) => {

    return (
        <label htmlFor={props.label+'-'+props.name} className={`checkbox ${props.type ? 'checkbox--'+props.type: ''}`}>
            <input name={props.name} onChange={props.onChange} type="checkbox" id={props.label+'-'+props.name} />
            <span className="checkbox__check"/>
            <p>{props.label}</p>
        </label>
    )
}

export default CheckBox;