const path = require("path");

// const isDevelopment = process.NODE_ENV;

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.jsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".jsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
};
