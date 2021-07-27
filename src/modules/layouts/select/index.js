import React from "react";
import {v4 as uuid} from 'uuid';

const SelectComponent = ({name, label, value, onChange, optionData, namePlaceHolder, invalid}) => {
    
    return (
        <label className={`form__group field option-select ${invalid ? 'field-required' : ''}`}>
            <select className="field__select field__input" name={name} onChange={onChange} value={value}>
                <option value="" disabled>{namePlaceHolder}</option>
                {optionData.map(data => (
                    <option key={uuid()}>{data.value}</option>
                ))}
            </select>
            <span className="field__label-wrap">
                <span className="field__label">{label}</span>
            </span>
        </label>
    )
};

export default React.memo(SelectComponent);