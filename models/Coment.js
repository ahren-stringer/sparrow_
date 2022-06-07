const mongoose =require('mongoose');

const comentSchema=mongoose.Schema({
    post: {type: mongoose.Types.ObjectId, ref: 'post'},
    coment:String,
    date: {type:Date, default: Date.now},
    author: {type: mongoose.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Coment',comentSchema)