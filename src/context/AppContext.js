
import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [state, setState] = useState({});

    /**
     * Generic function to update the state.
     * Example: updateState("key", value) will add or update state[key].
     */
    const updateState = (key, value) => {
        setState((prevState) => ({ ...prevState, [key]: value }));
    };

    return (
        <AppContext.Provider value={{ state, updateState }}>
            {children}
        </AppContext.Provider>
    );
};
