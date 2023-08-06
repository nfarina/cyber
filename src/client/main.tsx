import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CyberRootStyle } from "../theme/containers.js";
import { App } from "./App.js";

const root = createRoot(document.getElementById("cyber-root")!);
root.render(
  <StrictMode>
    <CyberRootStyle />
    <App />
  </StrictMode>,
);