const componentRegistry = new Map();

/**
 * Register a component with a unique name.
 * @param {string} name - Unique name of the component.
 * @param {React.Component} component - React component to register.
 */
export const registerComponent = (name, component) => {
    console.log(`Registering component: ${name}`);
    componentRegistry.set(name, component);
};


/**
 * Get a component by name.
 * @param {string} name - Name of the component.
 * @returns {React.Component | null} - The registered component or null if not found.
 */
export const getComponent = (name) => {
    console.log(`Retrieving component: ${name}`);
    const component = componentRegistry.get(name);
    console.log(`Component found:`, component);
    return component || null;
};

