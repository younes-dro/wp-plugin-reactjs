import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const DefaultComponent = () => {
    const { state, updateState } = useContext(AppContext);

    const handleInputChange = (e) => {
        updateState("exampleKey", e.target.value);
    };

    return (
        <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
            <h2>React Context Example</h2>
            <p>Example Value: {state.exampleKey || "No value set yet"}</p>
            <input
                type="text"
                placeholder="Enter a value"
                onChange={handleInputChange}
            />
        </div>
    );
};

export default DefaultComponent;
