import React from "react";
import ReactDOM from "react-dom/client";
import DynamicLoader from "./src/registry/DynamicLoader";
import "./src/registry/registerComponents"; 

document.addEventListener("DOMContentLoaded", () => {
    const rootElement = document.getElementById("main");

    if (rootElement) {
        const root = ReactDOM.createRoot(rootElement);
        root.render(<DynamicLoader componentName="Default" />);
    }
});
