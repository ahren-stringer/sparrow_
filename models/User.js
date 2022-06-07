const mongoose =require('mongoose');

const schema=new mongoose.Schema({
    name:{type: String, required:true, unique:true},
    email:{type: String, required:true, unique:true},
    password: {type:String, required:true},
    description: String,
    // posts: [{type: mongoose.Types.ObjectId, ref: 'post'}],
    // coments: [{type: mongoose.Types.ObjectId, ref: 'Coment'}],
    avatar: Object || String,
});

//module.exports=model('User', schema)
module.exports = mongoose.model('User', schema)