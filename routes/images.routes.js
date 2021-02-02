import express from 'express';
const { Router } = express;
const router = Router()
import Image from '../models/Image.js'
import multer from 'multer'
import path from "path";
import fs from 'fs'

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

function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file).toString('base64');
    return bitmap
}
// Изображения
router.post("/images", async (req, res) => {
    try {
        upload(req, res, async() => {
            console.log("Request ---", req.body);
            console.log("Request file ---", req.file); //Here you get file.
            const { token } = req.body;
            const image = new Image({ img: req.file, token, });
            await image.save()
            res.json({
                img: 'data:image/png;base64,' + base64_encode(path.normalize(image.img.destination + image.img.filename))
            })
            console.log(image)
            /*Now do where ever you want to do*/
        });
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так' })
        console.log(e)
    }
});
router.delete("/images/:id", async (req, res) => {
    try {
        let images = await Image.find({ token: req.params.id });
        await Image.deleteMany({ token: req.params.id })
        console.log("Successful deletion");

        let files = images.map(item => path.normalize(item.img.destination + item.img.filename));
        console.log(files)
        files.forEach(filepath => fs.unlink(filepath, function (err) {
            if (err) {
                console.log(err)
            } else {
                console.log('file deleted: ', filepath);
            }
        }))

        res.json({ message: 'delited' })

    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так' })
        console.log(e)
    }
});
export default router