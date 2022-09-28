import express from 'express'

const router = express.Router()

router.get('/', (_req, res) => {
    res.send('A')
})

router.post('/', (_req, res) =>{
    res.send('B')
})

export default router