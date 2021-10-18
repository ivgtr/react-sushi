import React from "react";

export const Box: React.FC = ({ children }) => {
  return <div style={{ position: "absolute" }}>{children}</div>;
};
