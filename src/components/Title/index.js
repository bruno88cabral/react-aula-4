import React from "react";

const Title = ({ title, children }) => {
  return <h3>{children ?? title}</h3>;
};

export default Title;
