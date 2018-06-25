const https = require('https');

module.exports = class WeChat {
    static async jscode2session(ctx, next) {
        const wx_url = 'https://api.weixin.qq.com/sns/jscode2session'
            + '?appid=wxc55405d40b934b51'
            + '&secret=0d8635d5e70e385c3dbff51f0ce557ca'
            + '&js_code=' + ctx.query.jscode
            + '&grant_type=authorization_code';
            
        await new Promise((resolve, reject) => {
            https.get(wx_url, (res) => {
                let data = '';
                res.on('data', (chunk) => {
                    data += chunk;
                })
                res.on('end', () => {
                    resolve(data);
                })
                res.setEncoding('utf-8');
            }).on('error', err => reject(err));
        }).then(data => {
            ctx.type = 'application/json';
            ctx.body = data;
        }).catch(err => ctx.throw(err.status, err));

        await next();
    }
}




