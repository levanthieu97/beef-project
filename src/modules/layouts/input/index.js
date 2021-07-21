import React from "react";

const InputComponent = (props) => {
    return (
        <label className={`form__group field ${props.invalid ? 'field-required' : ''}`}>
            <input className="field__input" 
                placeholder={props.namePlaceHolder} 
                type={props.type} 
                name={props.name} 
                onChange={props.onChange}
            />
            <span className="field__label-wrap">
                <span className="field__label">{props.label}</span>
            </span>
        </label>
    )
};

export default React.memo(InputComponent);