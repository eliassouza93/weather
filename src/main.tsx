import './index.css'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HomePage } from "./page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HomePage />
  </StrictMode>
);
