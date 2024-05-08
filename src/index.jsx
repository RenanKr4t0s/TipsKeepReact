import React from 'react';
import { createRoot } from "react-dom/client";
import App from "./components/App"

const routeRoot = document.getElementById("root");
const root = createRoot(routeRoot);
root.render(
  <>
    <App />
  </>
)
