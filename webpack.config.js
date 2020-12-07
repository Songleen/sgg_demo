const path = require('path')

const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist/bundle'),
        filename: 'bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html'
        })
    ],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(jpg|png|git|bmp|jpeg)$/, use: 'url-loader?limit=1234&name=[hash:8][name].[ext]' },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
            { test: /\.vue$/, use: 'vue-loader' }
        ]
    },
    resolve: {
        alias: {
            "vue$":"vue/dist/vue.js"
        }
    }
}