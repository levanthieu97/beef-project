import React, {useState} from "react";
import { FaCheckCircle } from "react-icons/fa";
const CheckboxSize = (props) => {
  const onSelect = (e) => {
    setChecked(true);
    props.onChange({
      size: e.target.getAttribute("data-name"),
      estWeight: e.target.getAttribute("data-weight")
    });
  };
  const [checked, setChecked] = useState(false);
  return (
    <label htmlFor={props.name + "-" + props.size} className={`checkbox-size`}>
      <input
        defaultChecked={props.size === props.defaultCheck}
        onChange={onSelect}
        value={checked}
        data-name={props.valueName}
        name={props.name}
        type={props.type}
        id={props.name + "-" + props.size}
        data-weight={props.estWeight}
      />
      <div className="checkbox__check">
        <span className="checkbox__size">{props.valueName}.</span>
        <span className="checkbox__price">${props.price}</span>
        <span className="checkbox__checked">
          <FaCheckCircle/>
        </span>
      </div>
    </label>
  );
};

const areSizeEqual = (preProps, nextProps) => {
    return preProps.type === nextProps.type;
}

export default React.memo(CheckboxSize, areSizeEqual);
