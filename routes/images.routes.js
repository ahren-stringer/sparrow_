import express from 'express';
const { Router } = express;
const router = Router()
import Image from '../models/Image.js'
import multer from 'multer'
import fs from 'fs'
import path from 'path';
import {__dirname} from '../app.js'

const storage = multer.diskStorage({
    destination:(req, file, cb) =>{
        console.log(req.body)

        // fs.mkdir(path.normalize(__dirname+"/public/posts/"+file.originalname), (err) => { 
        //     if (err) { 
        //         return console.error(err); 
        //     } 
        //     console.log('Directory created successfully!'); 
        // })
        cb(null,  "./public/posts/");
    },
    filename: function (req, file, cb) {
        cb(null,Date.now()+file.originalname);
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
            const { date } = req.body;
            const image = new Image({ img: req.file, date, });
            await image.save()
            // res.json({
            //     img: 'data:image/png;base64,' + base64_encode(path.normalize(image.img.destination + image.img.filename))
            // })
            res.json(image)
            console.log(image)
        });
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так' })
        console.log(e)
    }
});
router.get('/publication_image/:filename', async (req, res) => {
    try {
        console.log(__dirname)
        res.sendFile(path.normalize(__dirname+"/public/posts/" + req.params.filename))
        console.log(path.normalize("./public/posts/" + req.params.filename))
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})
router.delete("/images/:filename", async (req, res) => {
    try {
        let images = await Image.find({ date: req.params.folder });
        await Image.deleteMany({ date: req.params.folder })
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