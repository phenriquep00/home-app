import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CurrentPageProvider } from "./hooks/useCurrentPage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CurrentPageProvider>
      <App />
    </CurrentPageProvider>
  </React.StrictMode>
);
