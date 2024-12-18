import { registerComponent } from "./componentRegistry";
import Default from "../components/DefaultComponent"
import PostFetcher from "../components/PostFetcher";

// Register components
registerComponent("Default", Default);
registerComponent("PostFetcher", PostFetcher);

// You can extend this file to register more components
