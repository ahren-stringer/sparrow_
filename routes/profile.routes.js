const express =require('express');
const { Router } = express;
const router=Router()
const User =require('../models/User.js');

router.get('/user/:userId', async (req, res) => {
        try { 
            console.log(req.params.userId)           
            const user = await User.findById(req.params.userId);
            console.log(user)
            res.json(user)
        } catch (e) {
            res.status(500).json({ message: 'Ошибка пользователя' })
        }
    })
    router.get('/chanels/user/:userId', async (req, res) => {
        try { 
            console.log(req.params.userId)           
            const user = await User.findById(req.params.userId);
            console.log(user)
            res.json(user)
        } catch (e) {
            res.status(500).json({ message: 'Ошибка пользователя' })
        }
    })
module.exports = router