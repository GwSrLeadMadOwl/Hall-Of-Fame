const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
    mode: "development",
    context: path.resolve(__dirname, "src"),
    entry: "./index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    // resolve: {
    //     extensions: [".js", ".css", ".sass", ".scss", ".png", ".svg"],
    // },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin(
            {
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
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                // options: {
                //     name: '[path][name].[ext]',
                //     publicPath: path.resolve(__dirname, "dist/styles")
                // },
            },
            {
                test: /\.s[ac]ss$/,
                use: ['style-loader', "css-loader", "sass-loader"],
                // options: {
                //     name: '[path][name].[ext]',
                //     publicPath: path.resolve(__dirname, "dist/styles")
                // },
            },
            {
                test: /\.(png|jpe?g|svg|gif)$/,
                use: ["file-loader"],
                // options: {
                //     name: '[path][name].[ext]',
                //     publicPath: path.resolve(__dirname, "dist/assets/img")
                // },
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ["file-loader"],
                // options: {
                //     name: '[path][name].[ext]',
                //     publicPath: path.resolve(__dirname, "dist/assets/fonts")
                // },
            },
        ]
    }
};