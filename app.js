import React from "react";
import ReactDOM from "react-dom/client";
import { AppProvider } from "./src/context/AppContext"; // Import the generic Provider
import Container from "./src/components/Container";
import './src/registry/registerComponents'

document.addEventListener("DOMContentLoaded", () => {
    const rootElement = document.getElementById("main");

    if (rootElement) {
        const root = ReactDOM.createRoot(rootElement);

        root.render(
            <AppProvider>
                <Container />
            </AppProvider>
        );
    }
});
