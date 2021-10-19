import React from "react";

export const Box: React.FC = ({ children }) => {
  return <div style={{ position: "absolute", width: "100%", height: "100%" }}>{children}</div>;
};
