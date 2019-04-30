const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/app.js", // bundle's entry point
    output: {
        path: path.resolve(__dirname, 'dist'), // output directory
        filename: "[name].js" // name of the generated bundle
    },
    plugins : [
        // this instructs to inject the assets at the bottom of the body element using index.html as the template
        new HtmlWebpackPlugin({
            template: "src/index.html",
            inject : "body"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/, // instructs webpack to process all files matching this pattern using a pipeline of loaders below
                loader: [
                    "style-loader", // adds this as a style element to the DOM
                    "css-loader" // loads css files and returns css code
                ]
            }
        ]
    }
};