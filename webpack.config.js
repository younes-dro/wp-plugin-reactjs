const path = require("path");

module.exports = (env, argv) => {
  const mode = argv.mode || "development"; // Default mode is development
  const isProduction = mode === "production";

  return {
    entry: "./app.js",
    output: {
      // Use different paths for development and production
      path: isProduction
        ? path.resolve(__dirname, "dist/public")
        : path.resolve(__dirname, "public"),
      filename: "bundle.js",
    },
    mode: mode,
    devtool: isProduction ? "source-map" : "eval-source-map",
    module: {
      rules: [
        {
          test: /\.jsx?$/, // Match both .js and .jsx files
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
              plugins: ["@babel/plugin-proposal-class-properties"],
            },
          },
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx"], // Automatically resolve .js and .jsx files
    },
  };
};
