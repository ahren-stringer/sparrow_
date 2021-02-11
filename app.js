import expess from 'express'
import mongoose from 'mongoose'
import Cors from "cors"
import auth from './routes/auth.routes.js'
import profile from './routes/profile.routes.js'
import posts from './routes/posts.routes.js'
import category from './routes/category.routes.js'
import image from './routes/images.routes.js'
import coments from './routes/coments.routes.js'
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

//API Config
const app = expess();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://ahren:sVi9gNCp8d9boA0Y@cluster0.v0wai.mongodb.net/Sparrow2?retryWrites=true&w=majority'
 'mongodb://localhost:27017/sparrow'
 
console.log(__dirname)
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

app.use('', image)

app.use('',coments)

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