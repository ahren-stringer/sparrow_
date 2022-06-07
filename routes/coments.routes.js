const express =require('express');
const {Router} = express;
const router=Router();
const Coment =require("../models/Coment.js");

router.post('/coment', async (req, res) => {

    try {
        const { coment, author, post } = req.body

        // if (!token) return res.status(400).json({ message: 'Вы не авторизованны' })
        // const decoded = jwt.verify(token, 'TopSecret')

        // const user = await User.findById(decoded.userId)
        const newComent = new Coment({ coment, author, post })
        await newComent.save()
        res.status(201).json({ newComent })
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})

router.get('/coments/some/:postId/:limit/:skip', async (req, res) => {
    try {
        // const coments_all= await Coment.find()
        await Coment.find({post: req.params.postId})
        .limit(+req.params.limit)
        .skip(+req.params.skip)
        .populate(['author'])
        .exec((err, coments) => {
            if (err) return res.status(404).json({ message: "Коментарии не найдены" })
            return res.json({
                    "coments":coments,
                    "totalCount": coments.length
                })
        });
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})

router.get('/cinema/coments_count/:place', async (req, res) => {
    try {
        const coments = await Coment.find({place: req.params.place})
        res.json(coments.length)
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})


module.exports = router