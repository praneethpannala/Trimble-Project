var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'app/bundle.js'
    },

    resolve: {
        extensions: ['.html', '.js'],
        alias: {
            jquery: "jquery/src/jquery"
        }
    },

    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style-loader!css-loader" //loads css files
        }, {
            test: /\.html$/,
            loader: 'html-loader' //loads html files
        }, {
            test: /\.sass$/,
            loader: "style-loader!css-loader!sass-loader" // compiles Sass to CSS 
        }, {
            test: /\.png$/,
            loader: 'url-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })

    ],
    watch: true
};
