import mongoose from 'mongoose'

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

export default mongoose.model('post', postSchema)