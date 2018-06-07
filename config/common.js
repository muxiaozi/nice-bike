/**
 * File: common.js
 * Author: muxiaozi <1002042998@qq.com>
 * DateTime: 2018-06-05
 */
module.exports = {
    // 生产环境
    production: {
        mysql: {
            host: '211.159.149.193',
            user: 'user',
            password: 'mR2(S(N#jo4lt9o',
            database: 'guns'
        }
    },

    // 开发环境
    development: {
        mysql: {
            host: 'localhost',
            user: 'root',
            password: 's3yl7wjxh5ykzz',
            database: 'bike'
        }
    }
}