const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
       'main': "./src/index.js",
},
    module: {
        rules: [{
            test:/\.js$/i,
            use: ['babel-loader']
        }, {
            test: /.s[ac]ss$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }
    ]},
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new MiniCssExtractPlugin ({
            filename: 'assests/css/style.css'
        })],
};