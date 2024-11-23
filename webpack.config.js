const path = require("path");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    entry: "./app.js",
    output: {
      path: path.resolve(__dirname, "public"),
      filename: "bundle.js",
    },
    mode: isProduction ? "production" : "development",
    devtool: isProduction ? "source-map" : "eval-source-map", // Adjust source maps
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react"
              ],
              plugins: ["@babel/plugin-proposal-class-properties"],
            },
          },
        },
      ],
    },
  };
};
