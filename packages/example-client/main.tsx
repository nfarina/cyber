import { CrosswingRootStyle } from "crosswing/containers";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const root = createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <CrosswingRootStyle />
    <App />
  </StrictMode>,
);