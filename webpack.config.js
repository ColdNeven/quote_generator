const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const MiniCss = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'webpack.bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    //! optimization
    optimization: {
        minimizer: [
            new UglifyJsPlugin({

            }),
            new CssMinimizerPlugin({

            }),

        ],
        minimize: true,
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port:4200,
    },
    //! plugins
    plugins: [
        new FaviconsWebpackPlugin({
            logo: './src/logo/logo.ico',
        }),
        new HTMLPlugin({
            filename: "index.html",
            template: "./src/index.html"
        }),
        new MiniCss({
            filename: 'style.css'
        }),

    ],
    resolve: {
        extensions: ['.js', ".ts"]
    },
    //! module and load
    module: {
        rules: [
            //css loader
            {
                test: /.css$/,
                use: [MiniCss.loader, 'css-loader'] ,
            },
            {
                test: /.less$/,
                use: [MiniCss.loader, 'css-loader', 'less-loader']
            },
            {
                test: /\.scss$/i,
                use: [ MiniCss.loader, 'css-loader', 'sass-loader']
            },
            //babel
            {
                test: /\.(js|ts)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};