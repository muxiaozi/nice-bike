/**
 * File: config.js
 * Author: muxiaozi <1002042998@qq.com>
 * DateTime: 2018-06-05
 */
const config = {
    // 生产环境
    production: {
        mongo: {
            uri: 'mongodb://muxiaozi.cn:27017'
        }
    },

    // 开发环境
    development: {
        mongo: {
            uri: 'mongodb://127.0.0.1:27017'
        }
    }
}

module.exports = config[process.env.NODE_ENV || 'development'];