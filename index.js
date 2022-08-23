import express from 'express'
import bodyParser from 'body-parser'
import router from './beers.js'
import cors from 'cors'


const app= express();

app.use(cors())

app.use(bodyParser.json());

app.use("/custom" , router)



const port = 3012;

app.listen(port, (req, res) => {
    console.log("server is running")
})

app.get 