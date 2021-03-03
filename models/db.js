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

const myCollections = module.exports = mongoose.model('helloBlogs', blogSchema);

module.exports.createBlog = function(newBlog, callback) {
    newBlog.save(callback)
};

module.exports.getAllBlogs = function(data) {

    myCollections.find(data)
};

module.exports.deleteDocument = function(id, callback) {

    myCollections.findByIdAndDelete(id, callback)
};

module.exports.updateDocument = function(id, callback) {

    var query = {
        _id:id
    }

    myCollections.findOne(query, callback)

};
