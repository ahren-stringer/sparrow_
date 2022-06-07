const mongoose =require('mongoose');

const CategorySchema=mongoose.Schema({
    category: String,
    img:{},
    posts: [{type: mongoose.Types.ObjectId, ref: 'posts'}]
});

module.exports = mongoose.model('Categories',CategorySchema)