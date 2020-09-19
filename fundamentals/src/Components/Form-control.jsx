import React from "react";

const FormControl = ({ Name, Value, OnChange }) => {
  return (
    <div className="form-group">
      <input
        className="form-control"
        placeholder={Name}
        type={Name === "Age" ? "number" : "text"}
        value={Value}
        name={Name}
        id={Name}
        onChange={OnChange}
      />
    </div>
  );
};

export default FormControl;
