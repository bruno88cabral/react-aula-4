import React from "react";
import "./styles.css";

const Button = ({ label, onClick, children }) => {
  return <button onClick={onClick}>{children ?? label}</button>;
};

export default Button;
