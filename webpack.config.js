const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = ["array", "effect", "either", "ord", "traverse", "semigroup", "show", "stream"].map((name) => ({
  entry: {
    [name]: `./src/${name}.ts`
  },
  mode: process.env["DEV_MODE"] ? "development" : "production",
  target: "web",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    modules: false,
                  },
                ],
              ],
            },
          },
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.webpack.json",
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [...(process.env["PROD_STATS"] ? [new BundleAnalyzerPlugin()] : [])],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    minimize: process.env["DEV_MODE"] ? false : true,
    minimizer: [new TerserPlugin()],
    usedExports: true,
  },
}));
