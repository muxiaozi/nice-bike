/**
 * File: uploader.js
 * Author: muxiaozi <1002042998@qq.com>
 * Date: 2018-06-24
 */
const path = require('path');
const Multer = require('koa-multer');

// koa-multer存储引擎
const storage = Multer.diskStorage({
    destination: path.resolve('./static/images'),
    filename(req, file, callback) {
        let user_id = req.url.split('/')[2];
        callback(null, user_id + path.extname(file.originalname));
    }
})

// koa-multer实例
const uploader = new Multer({
    storage,
    limits: {
        fileSize: 1024 * 1024 * 2   // 头像最大2M
    }
})

module.exports = uploader;