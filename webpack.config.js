const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

module.exports = {
    mode: "development",
    context: path.resolve(__dirname, "src"),
    entry: "./index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin(
            {
                minify: {
                    collapseWhitespace: isProd
                },
                template: './index.html',
            }
        ),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "./src/styles"),
                    to: path.resolve(__dirname, "dist/styles")
                },
                {
                    from: path.resolve(__dirname, "./src/assets"),
                    to: path.resolve(__dirname, "dist/assets")
                }
            ]
        }),
        new MiniCssExtractPlugin({
            // filename: filename("css"),
            filename: "[name].css",
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                // use: ['style-loader', 'css-loader'],
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader'],
            },
            {
                test: /\.s[ac]ss$/,
                use: ['style-loader', "css-loader", "sass-loader"]
            },
            {
                test: /\.jpg$/,
                use: ["file-loader"]
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ["file-loader"],
            }
        ]
    }
};