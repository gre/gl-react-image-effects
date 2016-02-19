import React from "react";
import {render} from "react-dom";
import App from "./src/App";
import fetch from "isomorphic-fetch";

if (!window.fetch) window.fetch = fetch;

Object.assign(document.body.style, {
  backgroundColor: "#eee",
  color: "#333",
  padding: 0
});

const root = document.createElement("div");
document.body.appendChild(root);
render(<App />, root);
