import express from 'express';
const { Router } = express;
const router = Router()
import Post from '../models/Post.js'
import Image from '../models/Image.js'
import multer from 'multer'
import fs from 'fs'
import path from 'path';
// import { fileURLToPath } from 'url';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
import {__dirname} from '../app.js'

const storage = multer.diskStorage({
    destination: "./public/posts/",
    filename: function (req, file, cb) {
        cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 100000000 },
}).single("myfile");

const obj = (req, res) => {
    upload(req, res, () => {
        console.log("Request ---", req.body);
        console.log("Request file ---", req.file); //Here you get file.
        const {
            title,
            categories,
            content,
            userId,
            subtitle
        } = req.body
        const post = new Post({ img: req.file, title, content, subtitle, categories,author: userId });
        post.save().then(() => {
            res.send({ message: "uploaded successfully" })
        })
        /*Now do where ever you want to do*/
    });
}

router.post("/posts", obj);

function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file).toString('base64');
    return bitmap
}

router.get("/posts/:title", async (req, res) => {
    try {
        Post.findOne({ title: req.params.title })
        .populate(['author'])
        .exec((err, post) => {
            if (err) return res.status(404).json({ message: "Пост не найден" })
            return res.json(post)
        });
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
});
// Пагинация
router.get('/posts/all/:limit/:skip', async (req, res) => {
    try {
        const posts_all = await Post.find();
        const posts = await Post.find().limit(+req.params.limit).skip(+req.params.skip)
        res.json({
            "posts": posts,
            "totalCount": posts_all.length
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})
// По категориям
router.get("/posts/categories/:category/:limit/:skip", async (req, res) => {
    try {
        const posts = await Post.find()
        let arr = [];
        posts.map(item => {
            if (item.categories[0].includes(req.params.category)) {
                arr.push(item)
            }
        })
        res.json({
            "posts": arr.slice(req.params.skip,req.params.skip+req.params.limit),
            "totalCount": arr.length
        })
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так' })
        console.log(e)
    }
});
// Поиск
router.get('/posts/search/:search', async (req, res) => {
    try {
        const posts = await Post.find()
        // console.log(req.params)
        // if (req.params.search==='') res.send([])
        res.json(posts.filter(item=> item.title.toLowerCase().includes(req.params.search)).slice(0,8))
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})

router.get('/posts/search_all/:search/:limit/:skip', async (req, res) => {
    try {
        let posts = await Post.find()
        posts=posts.filter(item=> item.title.toLowerCase().includes(req.params.search))
        .slice(+req.params.skip,+req.params.skip + +req.params.limit+1)
        //.limit(+req.params.limit).skip(+req.params.skip)
        res.json({
            "posts": posts,
            "totalCount": posts.length
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})
// Последние новости
router.get('/posts_latests', async (req, res) => {
    try {
        const posts = await Post.find().sort({date:1}).limit(3).populate(['author'])
        res.json(posts)
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})
// Новости от автора
router.get('/posts/author/:id', async (req, res) => {
    try {
        const posts = await Post.find({author: req.params.id})
        res.json(posts)
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})
export default router 