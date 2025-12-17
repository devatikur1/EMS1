import React from "react";
import ReactDOM from "react-dom/client";
import "./Tailwind.css";
import App from "./App";
import AppContextProvider from "./context/AppContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
