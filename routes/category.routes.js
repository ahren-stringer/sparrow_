import express from 'express';
const { Router } = express;
const router = Router()
import PostCategory from '../models/PostCategory.js'
import multer from 'multer'
import path from "path";
import fs from 'fs'

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

const storage = multer.diskStorage({
    destination: "./public/categories/",
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
        console.log("Request file ---", req.file);
        const {category} = req.body
        const categories = new PostCategory({ img: req.file, category });
        categories.save().then(() => {
            res.send({ message: "uploaded successfully" })
        })
    });
}

router.post("/category", obj);

function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file).toString('base64');
    return bitmap
}

router.get("/category", async (req, res) => {
    try {
        const categories = await PostCategory.find()
        res.send(categories)
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так' })
        console.log(e)
    }
});
router.get('/category/some', async (req, res) => {
    try {
        let categories = await PostCategory.find().limit(6)       
        res.json(categories)
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})
router.get('/blog/category/some', async (req, res) => {
    try {
        let categories = await PostCategory.find().limit(6)       
        res.json(categories)
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})
router.get('/post/category/some', async (req, res) => {
    try {
        let categories = await PostCategory.find().limit(6)       
        res.json(categories)
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})
router.get('/category/random', async (req, res) => {
    try {
        let categories = await PostCategory.find();
        categories=shuffle(categories)
        res.send(categories.slice(0, 4))
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})

export default router