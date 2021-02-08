import express from 'express';
const { Router } = express;
const router = Router()
import Post from '../models/Post.js'
import Image from '../models/Image.js'
import mongoose from 'mongoose'
import multer from 'multer'
import path from "path";
import fs from 'fs'
import { request } from 'http';

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
            userId
        } = req.body
        const post = new Post({ img: req.file, title, content, categories,author: userId });
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

// router.get("/posts", async (req, res) => {
//     try {
//         const posts = await Post.find()
//         let arr = posts.map(item => {
//             let obj = {};
//             obj.img = 'data:image/png;base64,' + base64_encode(path.normalize(item.img.destination + item.img.filename))
//             obj.title = item.title
//             obj.content = item.content
//             obj.categories = item.categories
//             return obj
//         })
//         res.send(arr)
//     } catch (e) {
//         res.status(500).json({ message: 'Что-то пошло не так' })
//         console.log(e)
//     }
// });

router.get("/posts/:title", async (req, res) => {
    try {
        Post.findOne({ title: req.params.title })
        .populate(['author'])
        .exec((err, post) => {
            if (err) return res.status(404).json({ message: "Пост не найден" })
            let obj = {};
            obj.img = 'data:image/png;base64,' + base64_encode(path.normalize(post.img.destination + post.img.filename))
            obj.title = post.title
            obj.content = post.content
            obj.categories = post.categories
            obj.author=post.author
            return res.json(obj)
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
        let arr = posts.map(item => {
            let obj = {};
            // console.log(item.img)
            // console.log(item.img.destination)
            obj.img = 'data:image/png;base64,' + base64_encode(path.normalize(item.img.destination + item.img.filename))
            obj.title = item.title
            obj.content = item.content
            obj.categories = item.categories
            return obj
        })
        res.json({
            "posts": arr,
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
                let obj = {};
                obj.img = 'data:image/png;base64,' + base64_encode(path.normalize(item.img.destination + item.img.filename))
                obj.title = item.title
                obj.content = item.content
                obj.categories = item.categories
                arr.push(obj)
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

        if (req.params.search==='') res.json([])
        
        res.json(posts.filter(item=> item.title.toLowerCase().includes(req.params.search)).slice(0,8))
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})

router.get('/posts/search_all/:search/:limit/:skip', async (req, res) => {
    try {
        const posts_all = await Post.find();
        const posts = await Post.find().limit(+req.params.limit).skip(+req.params.skip)
        let arr = posts.map(item => {
            let obj = {};
            console.log(item.img)
            console.log(item.img.destination)
            obj.img = 'data:image/png;base64,' + base64_encode(path.normalize(item.img.destination + item.img.filename))
            obj.title = item.title
            obj.content = item.content
            obj.categories = item.categories
            return obj
        })
        res.json({
            "posts": arr.filter(item=> item.title.toLowerCase().includes(req.params.search)),
            "totalCount": posts_all.length
        })
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})

export default router 