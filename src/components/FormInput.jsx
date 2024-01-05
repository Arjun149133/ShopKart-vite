import React from "react";

const FormInput = ({ label, name, type, defaultValue, size }) => {
  return (
    <div className=" form-control">
      <label htmlFor="label">
        <span className=" label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
      />
    </div>
  );
};

export default FormInput;
