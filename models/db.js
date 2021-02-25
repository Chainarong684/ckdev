const mongoose = require('mongoose');
const mongo = require('mongodb');
const dbUrl = 'mongodb://localhost:27017/myBlogs'

mongoose.connect(dbUrl, {
    useNewUrlParser:true
});

const db = mongoose.connection;
const schema = mongoose.Schema;

const blogSchema = new schema({
    id: {
        type:schema.ObjectId
    },
    title: {
        type:String,
        required: true
    },
    article: {
        type:String,
        required: true
    },
    article: {
        type:String,
        required: true
    }
});

const mySchema = module.exports = mongoose.model('myDbModule', blogSchema);
