import React from "react";

const Input = ({ handleChange, label, ...props }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...props} />

      {label ? (
        <label
          className={`${props.value.length ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default Input;
