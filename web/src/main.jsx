import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster toastOptions={{
        success: {
          duration: 1800,
        },
        error: {
          duration: 2000
        }
      }}/>
    </BrowserRouter>
  </StrictMode>
);
