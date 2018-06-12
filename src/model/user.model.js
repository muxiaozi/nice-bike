const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    wx_id: { type: String, required: true },    //微信OpenId
    name: { type: String, required: true },     //昵称
    avatar_url: { type: String, default: null },//头像
    badge: [Number],                            //徽章
    integral: { type: Number, default: 0 },     //积分
    records: [{ type: Schema.Types.ObjectId, ref: 'Record' }]   //上传记录
});

module.exports = mongoose.model('User', UserSchema, 'user');