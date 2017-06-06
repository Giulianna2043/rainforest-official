var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports= {
    entry:'./src/index.js',
    output:{
        filename:'dist/js/bundle.js'

    },
    module:{
    rules:[
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
                })
            },
            {
                test: /\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i, 
                use: ['file-loader'
                    ]
            }


        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'src/index.html',
            filename:'dist/index.html'
        }),
        new ExtractTextPlugin("styles.css"),
    ]
}