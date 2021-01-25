import express from 'express';
const {Router} = express;
const router=Router()
import PostCategory from '../models/PostCategory.js'

router.post(
    '/category',
    async (req, res) => {
        try {
            const { category} = req.body
            const condidate = await PostCategory.findOne({ category })
            if (condidate) {
                return res.status(400).json({ message: 'Такая категория уже есть' })
            }
            const newCategory = new PostCategory({ category });

            await newCategory.save()

            res.status(201).json({ message: 'Категория зарегистрирована' })
        } catch (e) {
            res.status(500).json({ message: 'Ошибка записи' })
        }
    })

    router.get(
    '/category',
    async (req, res) => {
        try {
            const category = await PostCategory.find()
            res.json(category)
        } catch (e) {
            res.status(500).json({ message: 'Что-то пошло не так' })
        }
    })

    router.get('/category/some', async (req, res) => {
    try {
        let categories= await PostCategory.find().exec()
        res.json(categories.slice(0,6))
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})
    export default router