import React from 'react';

const CheckBoxColor = (props) => {

    const onSelect = (e) => {
        props.onChange(e.target.getAttribute('data-name'));
      }

    return (
    <label htmlFor={props.color+'-'+props.name} className={`checkbox-color`}>
        <input onChange={onSelect} value={props.color} data-name={props.valueName} name={props.name} type={props.type} id={props.color+'-'+props.name} />
        <span className="checkbox__check">
        <span className="checkbox__color" style={{backgroundColor: props.color}}></span>
        </span>
    </label>
    )
}

export default CheckBoxColor;