import React from "react";
import DynamicLoader from "../registry/DynamicLoader";

const Container = () => {
    const componentsToLoad = ["Default","PostFetcher"]; // List of component names to load

    return (
        <div>
            <h1>My React Plugin</h1>
            {componentsToLoad.map((componentName, index) => (
                <DynamicLoader key={index} componentName={componentName} />
            ))}
        </div>
    );
};

export default Container;
