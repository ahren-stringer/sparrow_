import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    title: String,
    data: { type: Date, default: Date.now },
    categories: Array,
    img: {},
    content: String,
    author:{type: mongoose.Types.ObjectId, ref: 'User'},
    // authorName:String,
    // authorDesctription:String,
    // coments: [{type: mongoose.Types.ObjectId, ref: 'Coment'}],
    // owner: [{type: mongoose.Types.ObjectId, ref: 'User'}]
});

export default mongoose.model('post', postSchema)