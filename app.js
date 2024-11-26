import React from "react";
import ReactDOM from "react-dom/client";
import { AppProvider } from "./src/context/AppContext"; // Import the generic Provider
import DynamicLoader from "./src/registry/DynamicLoader";
import "./src/registry/registerComponents";

document.addEventListener("DOMContentLoaded", () => {
    const rootElement = document.getElementById("main");

    if (rootElement) {
        const root = ReactDOM.createRoot(rootElement);

        root.render(
            <AppProvider>
                <DynamicLoader componentName="Default" />
            </AppProvider>
        );
    }
});
