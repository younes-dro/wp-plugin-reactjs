import React from "react";
import config from "../config";

const Default = () => {
    return (
        <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
            <h2>Default Component</h2>
            <p>API Base URL: {config.apiBaseUrl}</p>
            <p>
                Experimental Feature Enabled:{" "}
                {config.featureToggles.enableExperimentalFeature ? "Yes" : "No"}
            </p>
            <p>App Version: {config.appVersion}</p>
        </div>
    );
};

export default Default;
