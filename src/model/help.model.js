const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HelpSchema = new Schema({
    title: { type: String, required: true },    //地点名
    images: [String],                           //图片链接
    content: { type: String, required: true },  //内容
});

module.exports = mongoose.model('Help', HelpSchema, 'help');