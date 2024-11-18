const path = require("path");

/**
 * This file configures webpack to generate a server-side bundle of your application.
 *
 * The output webpack generates must be a file named "render.js" and it must export a function named "render". This
 * function will be called with resource data to produce server-side rendered responses. The string that your "render"
 * function returns will be injected into your index.html file's <div id="app"> element.
 */

module.exports = {
  mode: "development",
  entry: "./src/render.js",
  output: {
    filename: "render.js",
    path: path.resolve(__dirname, "dist"),
    globalObject: "this",
    library: {
      type: "module",
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
    ],
  },
  experiments: {
    outputModule: true,
  },
};
