/* 
Import
*/
const mongoose = require('mongoose');
const { Schema } = mongoose;
//


/*
Config
*/
const messageSchema = new Schema({
    author: String,
    content: String,
    date: Date
}); 

/* 
Export
*/
const MessageModel = mongoose.model('post', messageSchema);
module.exports = MessageModel;
//