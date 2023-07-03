const path = require('path')

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

let mode = 'development'
let target = 'web'

if (process.env.NODE_ENV === 'production') {
    mode = 'production'
    target = 'browserslist'
}

const plugins = [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html')
    }),
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css'
    }),
]

module.exports = {
    mode,
    target,
    plugins,
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    devtool: 'source-map',
    devServer: {
        hot: true,
        port: 3000,
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            "@": path.resolve(__dirname, 'src'),
            "@components": path.resolve(__dirname, 'src/components'),
            "@data": path.resolve(__dirname, 'src/data'),
            "@features": path.resolve(__dirname, 'src/features'),
            "@hooks": path.resolve(__dirname, 'src/hooks'),
            "@layouts": path.resolve(__dirname, 'src/layouts'),
            "@pages": path.resolve(__dirname, 'src/pages'),
            "@router": path.resolve(__dirname, 'src/router'),
            "@services": path.resolve(__dirname, 'src/services'),
            "@utils": path.resolve(__dirname, 'src/utils'),
            "@ui": path.resolve(__dirname, 'src/components/ui'),
            "@assets": path.resolve(__dirname, 'src/assets'),
            "@styles": path.resolve(__dirname, 'src/assets/styles'),
        }
    },
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: 'html-loader'
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack']
            },
            {
                test: /\.(png|jpe?g|gif|webp|ico)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: 'asset/inline'
            },
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        }
                    },
                ]
            }
        ]
    }
}
