import express from 'express'
import Theories from '../models/theory'
import { Sequelize } from 'sequelize';
const router = express.Router()
const {or} = Sequelize.Op;

router.get('/', async(req, res, next) => {
    res.sendStatus(200)
})

router.post('/create', async (req, res, next)=>{
    // Create new Theory
    const theoryParams = req.body

    try {
        const newTheory = await Theory.create(theoryParams)
        res.json(newTheory)

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})


export default router;