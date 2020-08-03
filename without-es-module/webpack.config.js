const webpack = require('webpack');

module.exports = {
    mode: 'production',
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader']
        }]
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: new Date().toString()
        })
    ]
};