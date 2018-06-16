const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecordSchema = new Schema({
    place: { type: String, required: true },            //地点名
    position: {
        longitude: { type: Number, required: true },    //经度
        latitude: { type: Number, required: true }      //纬度
    },
    images: [String],                                   //图片链接
    remark: { type: String },                           //备注内容
    time: { type: Date, default: Date.now },            //时间
    question: { type: String, required: true },         //问题
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true }    //作者
});

module.exports = mongoose.model('Record', RecordSchema, 'record');