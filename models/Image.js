import mongoose from 'mongoose'

const imageSchema = mongoose.Schema({
    img: {},
    date: String,
    // authorName:String,
    // authorDesctription:String,
    // coments: [{type: mongoose.Types.ObjectId, ref: 'Coment'}],
    // owner: [{type: mongoose.Types.ObjectId, ref: 'User'}]
});

export default mongoose.model('image', imageSchema)