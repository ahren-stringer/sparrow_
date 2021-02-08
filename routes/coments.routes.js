import express from 'express';
const {Router} = express;
const router=Router()
import Coment from "../models/Coment.js"

router.post('/coment', async (req, res) => {

    try {
        const { coment, userId, post } = req.body

        // if (!token) return res.status(400).json({ message: 'Вы не авторизованны' })
        // const decoded = jwt.verify(token, 'TopSecret')

        // const user = await User.findById(decoded.userId)
        const newComent = new Coment({ coment, author: userId, post })
        await newComent.save()
        res.status(201).json({ newComent })
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})

router.get('/coments/some/:title/:limit/:skip', async (req, res) => {
    try {
        const coments_all= await Coment.find()
        const coments = await Coment.find({post: req.params.title})
        .limit(+req.params.limit)
        .skip(+req.params.skip)
        .populate(['author'])
        .exec((err, coments) => {
            if (err) return res.status(404).json({ message: "Диалог не найден" })
            return res.json({
                    "coments":coments,
                    "totalCount": coments_all.length
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

export default router