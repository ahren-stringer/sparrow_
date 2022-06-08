const express =require('express');
const { Router } = express;
const router = Router()
const Image =require('../models/Image.js');
const multer =require('multer');
const fs =require('fs');
const path =require('path');
//const {dirname} =require('../app.js');
const dirname =__dirname.replace(/\\routes/,'');

const storage = multer.diskStorage({
    destination:(req, file, cb) =>{
        console.log(req.body)

        // fs.mkdir(path.normalize(dirname+"/public/posts/"+file.originalname), (err) => { 
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
router.get('/publication_image/public/:destination/:filename', async (req, res) => {
    try {
        console.log(dirname)
        res.sendFile(path.normalize(dirname+"/public/"+req.params.destination + "/"+req.params.filename))
        console.log(path.normalize(dirname+"/public/"+req.params.destination +"/"+ req.params.filename))
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})
router.get('/post/publication_image/public/:destination/:filename', async (req, res) => {
    try {
        console.log(dirname)
        res.sendFile(path.normalize(dirname+"/public/"+req.params.destination + "/"+req.params.filename))
        console.log(path.normalize(dirname+"/public/"+req.params.destination +"/"+ req.params.filename))
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})
router.get('/blog/publication_image/public/:destination/:filename', async (req, res) => {
    try {
        console.log(dirname)
        res.sendFile(path.normalize(dirname+"/public/"+req.params.destination + "/"+req.params.filename))
        console.log(path.normalize(dirname+"/public/"+req.params.destination +"/"+ req.params.filename))
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})
router.get('/chanels/publication_image/public/:destination/:filename', async (req, res) => {
    try {
        console.log(dirname)
        res.sendFile(path.normalize(dirname+"/public/"+req.params.destination + "/"+req.params.filename))
        console.log(path.normalize(dirname+"/public/"+req.params.destination +"/"+ req.params.filename))
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})
router.delete("/image/:filename", async (req, res) => {
    try {
        let image = await Image.findOne({ "img.filename" : req.params.filename });
        await Image.deleteMany({ "img.filename" : req.params.filename })
        console.log("Successful deletion");

        let file =path.normalize(image.img.destination + image.img.filename);
        console.log(file)
        fs.unlink(file, function (err) {
            if (err) {
                console.log(err)
            } else {
                console.log('file deleted: ', file);
            }
        })

        res.json({ message: 'delited' })

    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так' })
        console.log(e)
    }
});
router.delete("/images/:date", async (req, res) => {
    try {
        let images = await Image.find({ date: req.params.date });
        await Image.findOneAndDelete({ date: req.params.date })
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
module.exports = router