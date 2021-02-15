import express from 'express';
const { Router } = express;
import bcryptjs from 'bcryptjs'
import User from '../models/User.js'
import jwt from 'jsonwebtoken'
import expressValidator from 'express-validator';
const { check, validationResult } = expressValidator;
import nodemailer from 'nodemailer'
import multer from 'multer'
import path from "path";

const router = Router()

const storage = multer.diskStorage({
    destination: "./public/user_avatar/",
    filename: function (req, file, cb) {
        cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 100000000 },
}).single("avatar");

router.post(
    '/register',
    [
        check('email', 'Неправильный email').isEmail(),
        check('password', 'Минимальная длина пароля 6 символов')
            .isLength({ min: 6 })
    ],
    async (req, res) => {
        try {

            // const errors = validationResult(req)
            // if (!errors.isEmpty()) {
            //     return res.status(400).json({
            //         errors: errors.array(),
            //         message: 'Некоректные данные'
            //     })
            // }
            upload(req, res, async () => {
                console.log("Request ---", req.body);
                console.log("Request file ---", req.file); //Here you get file.
                const { name, email, password, description} = req.body

                const condidate = await User.findOne({ email })

                if (condidate) {
                    return res.status(400).json({ message: 'Такой пользователь уже существует' })
                }
                const hashedPassword = await bcryptjs.hash(password, 12);

                const user = new User({
                    name,
                    email,
                    password: hashedPassword,
                    avatar: req.file,
                    description
                });

                await user.save()
            });
        } catch (e) {
            res.status(500).json({ message: 'Ошибка регистрации' })
        }
    })

router.post(
    '/login',
    [
        check('email', 'Введите корректный email').normalizeEmail().isEmail(),
        check('password', 'Введите пароль').exists()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некоректные данные'
                })
            }

            const { email, password } = req.body
            const user = await User.findOne({ email })

            if (!user) {
                return res.status(400).json({ message: 'Такого пользователя не существует' })
            }
            const isMatch = bcryptjs.compare(password, user.password)
            if (
                // password != user.password
                !isMatch
            ) {
                return res, status(400).json({ message: 'Неверный пароль' })
            }

            const token = jwt.sign(
                { userId: user.id },
                'TopSecret',
                { expiresIn: '24h' }
            )
            res.json({ token, userId: user.id })
        } catch (e) {
            res.status(500).json({ message: 'Ошибка авторизации' })
        }
    })

router.get("/users", async (req, res) => {
    try {
        const users = await User.find()
        res.send(users)
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так' })
        console.log(e)
    }
});

export default router