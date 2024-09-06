import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

// <input id={props.input.id} {...props.input}/> ?? doubt
// what happen when we use spread operator in element?
// We can get rid of input id and simply except that this
// id is part of input prop as well
// Input.displayName = "Input";
export default Input;
