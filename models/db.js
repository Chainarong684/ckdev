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
    category: {
        type:String,
        required: true
    }
});

module.exports = mongoose.model('helloBlogs', blogSchema);

module.exports.createBlog = function(newBlog, callback) {
    newBlog.save(callback)
};
