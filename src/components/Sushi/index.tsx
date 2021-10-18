import React from "react";
import { Normal } from "../Face";
import { Salmon } from "../Neta";
import { Shari } from "../Shari";

export const Sushi = () => {
  return (
    <div style={{ position: "relative", width: "530px", height: "320px" }}>
      <Shari />
      <Normal />
      <Salmon />
    </div>
  );
};
