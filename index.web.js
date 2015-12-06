import "gl-react/react";
import React from "react";
import {render} from "react-dom";
import App from "./src/App";

Object.assign(document.body.style, {
  backgroundColor: "#eee",
  color: "#333",
  padding: 0
});

const root = document.createElement("div");
document.body.appendChild(root);
render(<App />, root);
