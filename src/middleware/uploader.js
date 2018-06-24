/**
 * File: uploader.js
 * Author: muxiaozi <1002042998@qq.com>
 * Date: 2018-06-24
 */
const path = require('path');
const crypto = require('crypto');
const Multer = require('koa-multer');

// MD5加密
function md5(str){
    console.log(str);
    
    const md5 = crypto.createHash('md5');
    return md5.update(str).digest('hex');
}

// koa-multer存储引擎
const storage = Multer.diskStorage({
    destination: path.resolve('./static/images'),
    filename(req, file, callback) {
        callback(null, md5(String(Date.now()) + String(Math.random()) + file.originalname) + path.extname(file.originalname));
    }
})

// koa-multer实例
const uploader = new Multer({
    storage,
    limits: {
        fileSize: 1024 * 1024
    }
})

module.exports = uploader;