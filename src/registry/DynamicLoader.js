import React from "react";
import { getComponent } from "./componentRegistry";

const DynamicLoader = ({ componentName, ...props }) => {
    console.log('Component name  : ' + componentName );
    const Component = getComponent(componentName);

    console.log('Component  : ' + Component );

    if (!Component) {
        return <div>Component "{componentName}" not found.</div>;
    }

    return <Component {...props} />;
};

export default DynamicLoader;
