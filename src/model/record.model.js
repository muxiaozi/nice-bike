const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecordSchema = new Schema({
    place: { type: String, required: true },    //地点名
    point: {
        lng: { type: Number, default: 0 },      //经度
        lat: { type: Number, default: 0 }       //纬度
    },
    images: [String],                           //图片链接
    content: { type: String, required: true },  //内容
    time: { type: Date, default: Date.now },    //时间
    author: { type: Schema.Types.ObjectId, ref: 'User' }    //作者
});

module.exports = mongoose.model('Record', RecordSchema, 'record');