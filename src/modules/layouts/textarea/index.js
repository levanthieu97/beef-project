import React, {useState} from "react";

const TextAreaComponent = ({namePlaceHolder, name, label, value, onChange, invalid}) => {
    
    return (
        <label className={`form__group field form__area ${invalid ? 'field-required' : ''}`}>
            <textarea maxLength="100" className="field__input" placeholder={namePlaceHolder} value={value} name={name} onChange={onChange}/>
            <span className="field__label-wrap">
                <span className="field__label">{label}</span>
            </span>
        </label>
    )
};

export default React.memo(TextAreaComponent);