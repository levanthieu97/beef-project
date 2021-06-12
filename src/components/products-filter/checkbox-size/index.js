import React from "react";

const CheckboxSize = (props) => {
  const onSelect = (e) => {
    props.onChange(e.target.getAttribute("data-name"));
  };
  return (
    <label htmlFor={props.name + "-" + props.size} className={`checkbox-size`}>
      <input
        defaultChecked={props.size === props.defaultCheck}
        onChange={onSelect}
        value={props.valueName}
        data-name={props.valueName}
        name={props.name}
        type={props.type}
        id={props.name + "-" + props.size}
      />
      <span className="checkbox__check">
        <span className="checkbox__size">{props.valueName}</span>
      </span>
    </label>
  );
};

const areSizeEqual = (preProps, nextProps) => {
    return preProps.type === nextProps.type;
}

export default React.memo(CheckboxSize, areSizeEqual);
