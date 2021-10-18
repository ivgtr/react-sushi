import React from "react";
import { Sushi } from "./components/Sushi";

export const App = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <h1 style={{ textAlign: "center", fontSize: "48px", fontWeight: "bold" }}>react-sushi</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: "60px",
        }}
      >
        <Sushi />
      </div>
      <div style={{ width: "80%", margin: "40px auto 0" }}>
        <pre
          style={{
            backgroundColor: "#f6f8fa",
            borderRadius: "6px",
            fontSize: "85%",
            lineHeight: "1.45",
            overflow: "auto",
            padding: "16px",
            overflowWrap: "normal",
            boxSizing: "border-box",
            cursor: "pointer",
          }}
        >{`<Sushi />`}</pre>
      </div>
      <div style={{ margin: "60px auto 0", textAlign: "center" }}>
        <p>
          Link:{" "}
          <a href="https://github.com/ivgtr/react-sushi" target="_blank" rel="noreferrer">
            ivgtr/react-sushi
          </a>
        </p>
      </div>
    </div>
  );
};
