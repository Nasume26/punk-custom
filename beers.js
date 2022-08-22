import Router from 'express'

import beersJSON from './beersJS.json' assert {type: 'json'}

const router = Router();

const beers = beersJSON;


router.get("/", (req, res) => {
    res.status(200).send(
        beersJSON
    )
})

export default router