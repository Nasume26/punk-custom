import beersJSON from '../beersJS.json' assert {type: 'json'}
import sequelize from 'sequelize';


const { Sequelize } = sequelize; 

const sequelizer = new Sequelize('database', 'root', 'password', {
    host:'localhost',
    dialect:'mysql'
});










const beers = beersJSON;

export const getBeers = (req, res) => {
    res.status(200).send(
        beers
    )
} 

export const postBeers = (req, res) => {
    const id = req.body.id
    const name = req.body.name
    const tagline = req.body.tagline
    const first_brewed = req.body.first_brewed
    const description = req.body.description
    const image_url = req.body.image_url
    const abv = req.body.abv
    const ph = req.body.ph
    
    beers.push({
        id: id,
        name: name,
        tagline: tagline,
        first_brewed: first_brewed,
        description: description,
        image_url: image_url,
        abv: abv,
        ph: ph 
    })

    res.status(200).send(
        beers
    )
}