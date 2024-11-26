
# Starter WordPress Plugin ReactJS

A ready-to-use WordPress Plugin that makes it easy to integrate React JS into the development of a WordPress Plugin. You can create your JSX components and compile them into JavaScript, which will be enqueued by WordPress.

---

## Requirements

Install the module bundler Webpack v5+ and webpack-cli ***globally***:

```bash
npm install -g webpack
npm install -g webpack-cli
```

---

## Installation

1. Clone the repository to the Plugins directory of your WordPress installation: `/wp-content/plugins/`.

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Use the provided npm scripts to build the project:

   - **For development**:
     ```bash
     npm run dev
     ```
     This will generate the `public/bundle.js` file with source maps for debugging.

   - **For production**:
     ```bash
     npm run build
     ```
     This will generate the optimized and minified `dist/public/bundle.js` file.

   - **To watch for file changes**:
     ```bash
     npm run watch
     ```
     Automatically rebuilds the development bundle when changes are detected.

   - **To clean the output**:
     ```bash
     npm run clean
     ```
     Removes old build files from the `public/` and `dist/public/` directories.

---

## View

The plugin creates a menu entry under `Tools -> WP Plugin React`. Visit this page to see the result of your React components.

![](https://raw.githubusercontent.com/younes-dro/assets/a4636d6b87658d5e732f462f32e864a7d28ee631/dro-wp-plugin-js.png)

---

## Features

1. **Dynamic Component Loading**:
   - Allows developers to register and dynamically load React components without modifying the plugin core.
   - Uses a centralized registry (`src/registry/componentRegistry.js`) to manage components.
   - Provides the `DynamicLoader` component to load components based on their names.
   - Includes example components (`DefaultComponent` and `CustomComponent`) to demonstrate the functionality.

   **Example**:
   - To register a component:
     ```javascript
     import { registerComponent } from "./src/registry/componentRegistry";
     import MyComponent from "./src/components/MyComponent";

     registerComponent("MyComponent", MyComponent);
     ```

   - To load and render a component dynamically:
     ```javascript
     <DynamicLoader componentName="MyComponent" />
     ```

2. **Dynamic Script Loading**:
   - Automatically loads the appropriate script (`public/bundle.js` for development, `dist/public/bundle.js` for production) based on the `SCRIPT_DEBUG` constant in your `wp-config.php` file.

3. **React 18 Compatibility**:
   - Supports React 18 and uses `ReactDOM.createRoot` for rendering.

4. **Flexible Build System**:
   - Includes `dev`, `build`, `clean`, and `watch` npm scripts for easy development and deployment.

5. **Automatic Cache Busting**:
   - Uses `filemtime()` to version scripts dynamically based on their last modification time, ensuring browsers always load the latest version.

---

## Troubleshooting

### Script Execution Policy Error in PowerShell

If you encounter an error related to the script execution policy when running `webpack` in PowerShell, the error typically looks like:

```plaintext
webpack: Unable to load the file C:\Users\YourUsername\AppData\Roaming\npm\webpack.ps1 because
script execution is disabled on this system.
```

**Solution**:

1. Open PowerShell as an administrator.
2. Run the following command to set the execution policy for the current user:

   ```powershell
   Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
   ```

---

## Workflow

1. Edit your React components in the `src/components/` directory.
2. Use `npm run dev` during development for faster builds.
3. Use `npm run build` to generate a production-ready bundle.
4. Dynamically register components in `src/registry/registerComponents.js` or add your own.
5. Visit the `Tools -> WP Plugin React` page to see your changes in action.

---
