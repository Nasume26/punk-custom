import Router from 'express'

import { getBeers } from './controllers/beersController.js';

const router = Router();

router.get("/", getBeers)

router.post("/", )

export default router