const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  entry: {
    array: "./src/array.ts"
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
    minimizer: [new TerserPlugin({
      terserOptions: {
        keep_fnames: false,
        keep_classnames: false,
        parse: {
          ecma: 8
        },
        compress: {
          ecma: 5,
          warnings: false, // The following two options are known to break valid JavaScript code
          comparisons: false,
          inline: 2 // https://github.com/zeit/next.js/issues/7178#issuecomment-493048965
        },
        mangle: {
          safari10: true
        },
        output: {
          ecma: 5,
          safari10: true,
          comments: false, // Fixes usage of Emoji and certain Regex
          ascii_only: true
        }
      }
    })],
    usedExports: true,
  },
};
