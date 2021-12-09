//Webpack requires this to work with directories
const path = require("path");

// This is main configuration object that tells Webpackw what to do.
module.exports = {
  //path to entry paint
  entry: "./src/main.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  //path and filename of the final output
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
  },

  //default mode is production
  mode: "development",
  // The target: 'node' option tells webpack not to touch any built-in modules like fs or path.
  target: "node"
};
