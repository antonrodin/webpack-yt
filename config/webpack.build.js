const path = require("path");

module.exports = {

    mode: "development",

    entry: {
        yoquese: "./src/app.js"
    },

    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "../dist")
    }

}