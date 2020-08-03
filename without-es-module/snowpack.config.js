const _ = require('lodash');
const path = require('path');
const { merge } = require('webpack-merge');
const webpackConfig = require('./webpack.config');

module.exports = {
    "scripts": {
        "mount:public": "mount public --to /",
        "mount:src": "mount src --to /_dist_"
    },
    "plugins": [
        [
            '@snowpack/plugin-copy',
            {
                paths: [
                    path.resolve(__dirname, '.browserslistrc'),
                    path.resolve(__dirname, 'babel.config.json'),
                ]
            }
        ],
        [
            "@snowpack/plugin-webpack",
            {
                outputPattern: { // 打包输出（基于 build 目录）
                    css: './css/index.[contentHash].css', // css 输出文件名称(默认输出是基于文件内容hash)
                    js: './js/index.[contentHash].js'
                },
                extendConfig: (config) => {
                    config = _.omit(config, ['module.rules[0].use[0].options.presets']);
                    _.set(config, 'module.rules[0].use[0].options.configFile', path.resolve(__dirname, './babel.config.json'));
                    config.module.rules.splice(1, 1);
                    let finalConfig = merge(config, webpackConfig);
                    console.info('--finalConfig--', JSON.stringify(finalConfig, null, 4));
                    return finalConfig;
                }
            }
        ]
    ]
}