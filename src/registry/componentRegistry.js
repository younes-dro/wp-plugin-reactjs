const componentRegistry = new Map();

/**
 * Register a component with a unique name.
 * @param {string} name - Unique name of the component.
 * @param {React.Component} component - React component to register.
 */
export const registerComponent = (name, component) => {
    componentRegistry.set(name, component);
};

/**
 * Get a component by name.
 * @param {string} name - Name of the component.
 * @returns {React.Component | null} - The registered component or null if not found.
 */
export const getComponent = (name) => {
    return componentRegistry.get(name) || null;
};
