import React from "react";
import "../style/ErrorBox.css";

const ErrorBox = (props) => {
  return (
    <p
      className={
        props.ifError ? "error-true error-box" : "error-false error-box"
      }
    >
      {props.error}
    </p>
  );
};
export default ErrorBox;
