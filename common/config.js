/**
 * File: config.js
 * Author: muxiaozi <1002042998@qq.com>
 * DateTime: 2018-06-05
 */
const config = {
    // 生产环境
    production: {
        mongo: {
            uri: 'mongodb://muxiaozi.cn:27017/nice-bike'
        }
    },

    // 开发环境
    development: {
        mongo: {
            uri: 'mongodb://localhost:27017/nice-bike'
        }
    }
}

module.exports = config[process.env.NODE_ENV || 'development'];