const path = require('path');

module.exports = {

    mode: "development",

    entry: {
        app: ['./src/app.js']
    },
    
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/"
    },

    devServer: {
        contentBase: "dist"
    },

    module: {

        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: "/node_modules/"
            }
        ]

    }

}