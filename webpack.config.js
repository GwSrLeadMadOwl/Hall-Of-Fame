const path = require("path");

module.exports = {
    mode: "development",
    context: path.resolve(__dirname, "src"),
    entry: "index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    }
};