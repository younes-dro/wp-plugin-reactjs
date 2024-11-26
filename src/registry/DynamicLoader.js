import React from "react";
import { getComponent } from "./componentRegistry";

const DynamicLoader = ({ componentName, ...props }) => {
    const Component = getComponent(componentName);

    if (!Component) {
        return <div>Component "{componentName}" not found.</div>;
    }

    return <Component {...props} />;
};

export default DynamicLoader;
