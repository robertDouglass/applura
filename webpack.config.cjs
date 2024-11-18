const path = require("path");

/**
 * This file configures webpack to generate a client-side bundle of your application.
 *
 * The output webpack generates with this configuration should be imported by your index.html file.
 */

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    module: true,
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
  externalsType: "module",
  externals: {
    // The "@applura/client" package identifier is defined by the import map in index.html. It is not published on NPM.
    // See https://github.com/Applura/client#browser-only-import.
    "@applura/client": "@applura/client",
  },
  experiments: {
    outputModule: true,
  },
};
