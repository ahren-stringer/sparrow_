const mongoose =require('mongoose');

const postSchema = mongoose.Schema({
    title: String,
    data: { type: Date, default: Date.now() },
    categories: Array,
    img: {},
    content: String,
    author:{type: mongoose.Types.ObjectId, ref: 'User'},
    subtitle: String,
    text: String,
    
});

module.exports = mongoose.model('post', postSchema)