import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/components/app.jsx";

// Ensure React renders only after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const rootElement = document.getElementById("main");
    if (rootElement) {
        const root = ReactDOM.createRoot(rootElement);
        root.render(<App />);
    } else {
        console.error("Target container #main not found!");
    }
});
