const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const isDevelopment = process.NODE_ENV !== "production";
const ReactRefreshWebPack = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: isDevelopment ? "development" : "production", // mode development ou production,
  devtool: isDevelopment ? "eval-source-map" : "source-map", // melhora a localização do código no DevTools
  entry: path.resolve(__dirname, "src", "index.jsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    // deixa o html disponível estaticamente para o webpack
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    isDevelopment && new ReactRefreshWebPack(),
  ].filter(Boolean),
  devServer: {
    // quais alterações no código o server será reinicializado
    static: path.resolve(__dirname, "public"),
    hot: true,
  },
  resolve: {
    // entender estas extensões
    extensions: [".jsx", ".js"],
  },
  module: {
    // quando for construir o frontend
    rules: [
      {
        test: /\.(j|t)sx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              isDevelopment && require.resolve("react-refresh/babel"),
            ].filter(Boolean),
          },
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
