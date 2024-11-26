import { registerComponent } from "./componentRegistry";
import DefaultComponent from "../components/DefaultComponent";
import CustomComponent from "../components/CustomComponent";

// Register default components
registerComponent("Default", DefaultComponent);
registerComponent("Custom", CustomComponent);

// You can extend this file to register more components
