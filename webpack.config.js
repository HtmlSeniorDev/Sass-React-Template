const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const globImporter = require('node-sass-glob-importer');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevelopment = process.env.NODE_ENV === "development";
console.log('MODE: ' + isDevelopment ? 'dev' : 'prod');

let plugins = [

    new MiniCssExtractPlugin({
        filename: '[name].[hash].css', //извлечение css из бандла в файл
    }),
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
        template: "./src/index.html",
        "presets": ["@babel/preset-env", "@babel/preset-react"]

    })
];

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "build"), // путь до bundle
        filename: '[name].[hash].js', //имя bundle
    },
    devServer: {
        compress: true,
        inline: true,
        port: 8090,
        writeToDisk: true,
        historyApiFallback: true,
        contentBase: path.join(__dirname, "./build/")
    },
    resolve: {
        extensions: [".js", '.svg', ".png", ".scss", ".jpg", ".jsx"],
        modules: [path.resolve(__dirname, "./src"), "node_modules"],//автоматическое распознование расширения
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
                ]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(scss)$/,
                use: [{
                    loader: 'style-loader', // inject CSS to page
                },
                    {
                        loader: 'css-loader', // translates CSS into CommonJS modules
                    },
                    {
                        loader: 'postcss-loader', // Run post css actions
                        options: {
                            plugins: function () { // post css plugins, can be exported to postcss.config.js
                                return [
                                    require('precss'),
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                indentWidth: 2,
                                sourceMap: true,
                                importer: globImporter(),
                            },
                        },
                    }]
            },

        ]
    },

    plugins: plugins,
};
