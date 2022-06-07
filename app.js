const expess =require('express');
const mongoose =require('mongoose');
const Cors =require("cors");
const auth =require('./routes/auth.routes.js');
const profile =require('./routes/profile.routes.js');
const posts =require('./routes/posts.routes.js');
const category =require('./routes/category.routes.js');
const image =require('./routes/images.routes.js');
const coments =require('./routes/coments.routes.js');
const path =require('path');
const { fileURLToPath } =require('url');
//const __filename = fileURLToPath(const.meta.url);
//export const __dirname = path.dirname(__filename)

//API Config
const app = expess();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://ahren:sVi9gNCp8d9boA0Y@cluster0.v0wai.mongodb.net/Sparrow2?retryWrites=true&w=majority'
'mongodb://localhost:27017/sparrow' 
  
//Middleware
app.use(expess.json())
app.use(Cors())
// Авторизация
app.use('', auth)
//Пользовательские данные
app.use('', profile)
// Посты
app.use('', posts)
// Категории
app.use('', category)

app.use('', image)

app.use('',coments)

//DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true

}).catch(err=> console.log(err))

mongoose.connection.on('error', err => {
    console.log(err);
});

if (process.env.NODE_ENV === 'production') {
    app.use(expess.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}
//Listener

app.listen(port, () => console.log('Server Starts on localhost', port))