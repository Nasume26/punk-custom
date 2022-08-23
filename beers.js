import Router from 'express'

import { getBeers, postBeers } from './controllers/beersController.js';

const router = Router();

router.get("/", getBeers)

router.post("/", postBeers)

export default router