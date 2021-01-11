import express from 'express';
const {Router} = express;
import bcrypt from 'bcrypt'
import User from '../models/User.js'
import jwt  from 'jsonwebtoken'
import expressValidator from 'express-validator';
const { check, validationResult } = expressValidator;
import nodemailer from 'nodemailer'

const router=Router()

// const transporter = nodemailer.createTransport({
//     host: 'smtp.mail.ru',
//     port: 465,
//     secure: true,
//     auth: {
//         user: 'mos_culture@mail.ru',
//         pass: 'youwi11neverpass'
//     },
//     tls: {
//         rejectUnauthorized: false
//     }
// });

// const mailer= message =>{
//     transporter.sendMail(message,(err,info)=>{
//         if (err) return console.log('Error ',err)
//         console.log('Email sent:', info)
//     })
// }

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

            const { name, email, password} = req.body
            
            //const condidate = await User.findOne({ email })
            //console.log('body', req.body)
            // console.log(condidate)
            // if (condidate) {
            //     return res.status(400).json({ message: 'Такой пользователь уже существует' })
            // }
            const hashedPassword = await bcrypt.hash(password, 12);
            
            const user = new User({ name, email, password: hashedPassword });
            //console.log('body', req.body)

            await user.save()
            console.log('body', req.body)
            res.status(201).json({ message: 'Пользователь зарегистрирован' })
            // Отправка на почту

            // const message = {
            //     from: 'MosCulture <mos_culture@mail.ru>',
            //     to: req.body.email, 
            //     subject: 'Вы зарегистрированны на сайте MosCulture',
            //     text: `Вы зарегистрированны на сайте MosCulture
                
            //     Данные вашей учетной записи:
            //     Логин: ${req.body.email}
            //     Пароль: ${req.body.password}`
            //   };

            // mailer(message)

        } catch (e) {
            res.status(500).json({ message: 'Ошибка регистрации' })
        }
    })

router.post(
    '/login',
    [
        check('email', 'Введите корректный email').normalizeEmail().isEmail(),
        check('password', 'Ввкдите пароль').exists()
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
            const isMatch = bcrypt.compare(password, user.password)
            if (!isMatch) {
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

export default router