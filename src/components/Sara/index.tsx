import React from "react";

export const Sara: React.FC<{ zindex?: number; scale?: number }> = ({
  children,
  zindex = 1,
  scale = 1,
}) => {
  return (
    <div
      style={{
        position: "relative",
        width: `${530 * scale}px`,
        height: `${320 * scale}px`,
        zIndex: zindex,
      }}
    >
      {children}
    </div>
  );
};
