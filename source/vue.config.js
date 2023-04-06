const path = require('path');
const CompressWebpackPlugin = require('compress-webpack-plugin');
const webpack = require('webpack');
const productionGzipExtensions = ['js', 'css'];

module.exports = {
    transpileDependencies: ['cloud-ui.vusion', 'lcap-login', '@vusion/utils', '@vusion/validators', 'decimal.js', 'sockjs-client', 'crypto-js', 'unn-aamlogin'],
    configureWebpack: {
        resolve: {
            alias: {
                'cloud-ui.vusion$': path.resolve(__dirname, 'node_modules/cloud-ui.vusion/dist-raw/index.js'),
                'cloud-ui.vusion.css$': path.resolve(__dirname, 'node_modules/cloud-ui.vusion/dist-raw/index.css'),
            },
        },
        plugins: [
            new CompressWebpackPlugin({
                algorithm: 'gzip',
                test: new RegExp('\\.('+ productionGzipExtensions.join('|') + ')$'),
                threshold: 10240,
                minRate: 0.8
            }),
            new Webpack.optimize.LimitChunkCountPlugin({
                maxChunks: 5,
                minChunkSize: 100
            })
        ]
    },
    devServer: {
        before: require('./mock/index.js')
    }
};
