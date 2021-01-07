import expess from 'express'
import mongoose from 'mongoose'
import Cors from "cors"
// import auth from './routes/auth.routes.js'
// import category from './routes/category.routes.js'
// import coments from './routes/coments.routes.js'
// import email from './routes/email.routes.js'
// import places from './routes/places.routes.js'

//API Config
const app = expess();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://poul:wGa57L7T4Hms3Ker@cluster0.hsumz.mongodb.net/Schelkovo db?retryWrites=true&w=majority'
//Middlewares
app.use(expess.json())
app.use(Cors())
// // Авторизация
// app.use('',auth)
// // Категории
// app.use('',category)
// // Коменты
// app.use('',coments)
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
app.get('/', (req, res) => res.status(200).send('GET'))
//Listener

app.listen(port, () => console.log('Server Starts on localhost', port))