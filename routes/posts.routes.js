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
            // token 
        } = req.body
        const post = new Post({ img: req.file, title, content, categories });
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

router.get("/posts", async (req, res) => {
    try {
        const posts = await Post.find()
        let arr = posts.map(item => {
            let obj = {};
            obj.img = 'data:image/png;base64,' + base64_encode(path.normalize(item.img.destination + item.img.filename))
            obj.title = item.title
            obj.content = item.content
            obj.categories = item.categories
            return obj
        })
        res.send(arr)
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так' })
        console.log(e)
    }
});

router.get("/posts/:title", async (req, res) => {
    try {
        const post = await Post.find({ title: req.params.title })
        console.log(post)
        res.send('<div>' + post[0].text + '<div>')
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
});

export default router