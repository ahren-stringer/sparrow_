import mongoose from 'mongoose'

const CategorySchema=mongoose.Schema({
    category: String,
    img:{},
    posts: [{type: mongoose.Types.ObjectId, ref: 'posts'}]
});

export default mongoose.model('Categories',CategorySchema)