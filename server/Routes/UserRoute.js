const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const {check,validationResult} = require('express-validator')
const User = require('../Model/UserModel.js')



router.get('/auth',
    [
        check('name', 'некоректное имя').isLength({min: 3}),
        check('pass', 'Минимальная длина пароля 6 символов').isLength({min: 6})
    ]
    ,async (req, res)=> {
    try {
        const errors = validationResult(req)
        console.log(errors)
        if (!errors.isEmpty()) {

            return res.status(400).json({message: errors.array()})
        }
        const {name, pass} = req.body
        if (name && pass) {
            const candidate = await User.findOne({name})
            if (pass === candidate.pass) {
                return res.status(200).json({candidate})
            } else {
                return res.status(400).json({message: 'пароли не совпадают'})
            }
        } else {
           return  res.json({message: 'есть пустые поля'})
        }
    } catch (e) {
        console.log(e)
        res.status(500).json({message: 'При авторизации пользователя что то пошло не так'})
    }
});

router.post('/registration',
    [
        check('name', 'некоректное имя').isLength({min: 3}),
        check('pass', 'Минимальная длина пароля 6 символов').isLength({min: 6})
    ],
    async (req,res)=> {
    const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(200).json({message: errors})
        }
    try {
        const {name, pass} = req.body
        const candidate = await User.findOne({name})
        if (candidate) {
           return  res.status(400).json({message: `Имя ${name} уже занято`})
        }
        const hashedPass = await bcrypt.hash(pass, 10)

        const createUser = new User({name, pass:hashedPass})
        await createUser.save()

        res.json(createUser)
    }catch (e) {
        console.log(e)
        res.status(500).send('При регистрации пользователя что то пошло не так')
    }

});
module.exports = router