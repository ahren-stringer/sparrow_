import expess from 'express'
import mongoose from 'mongoose'
import Cors from "cors"
import auth from './routes/auth.routes.js'
import profile from './routes/profile.routes.js'
import posts from './routes/posts.routes.js'
import category from './routes/category.routes.js'
// import coments from './routes/coments.routes.js'
// import email from './routes/email.routes.js'
// import places from './routes/places.routes.js'

//API Config
const app = expess();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://ahren:sVi9gNCp8d9boA0Y@cluster0.v0wai.mongodb.net/Sparrow2?retryWrites=true&w=majority'

'mongodb+srv://Reacter:w0ex9BOWLX8K1h@cluster0.c55pp.mongodb.net/Sparrow?retryWrites=true&w=majority'
//'mongodb+srv://poul:wGa57L7T4Hms3Ker@cluster0.hsumz.mongodb.net/Schelkovo db?retryWrites=true&w=majority'
//Middlewares
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
    // // Обратная связь
    // app.use('',email)
    // // Места
    // app.use('',places)

//DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true

})

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