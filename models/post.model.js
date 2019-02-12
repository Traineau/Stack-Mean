/* 
Import
*/
const mongoose = require('mongoose');
const { Schema } = mongoose;
const jwt = require('jsonwebtoken');
//


/*
Config
*/
const postSchema = new Schema({
    title: String,
    content: String,
    author: String
}); 

/* 
Export
*/
const PostModel = mongoose.model('post', postSchema);
module.exports = PostModel;
//