// import beersJSON from '../beersJS.json' assert {type: 'json'}
import sequelize, { DataTypes } from 'sequelize';


const { Sequelize } = sequelize; 

const sequelizer = new Sequelize('beers', 'root', 'password', {
    host:'localhost',
    dialect:'mysql'
});


try {
    await sequelizer.authenticate();
    console.log("Succesfully connected to MYSQL Database")
} catch (error) {
    console.log('Unable to connect to Database', error)
}


const beer = sequelizer.define('beer', {
    id: {
       type: DataTypes.INTEGER,
       allowNull: false,
       primaryKey: true
}, name: {
    type: DataTypes.STRING
}, tagline: {
    type: DataTypes.STRING
}, first_brewed: {
    type: DataTypes.STRING
}, description: {
    type: DataTypes.STRING
}, image_url: {
    type: DataTypes.STRING
}, abv: {
   type: DataTypes.INTEGER
}, ph: {
    type: DataTypes.INTEGER
}

})
console.log(beer === sequelizer.models.beer)
const beerFunction = (id, name, tagline, first_brewed, description, image_url, abv, ph) => {
    const newBeer = beer.build({
        id: id,
        name: name,
        tagline: tagline,
        first_brewed: first_brewed,
        description: description,
        image_url: image_url,
        abv: abv,
        ph: ph 
    })
    newBeer.save();

}

const beers = await beer.findAll();

console.log(JSON.stringify(beers))

export const getBeers = (req, res) => {
    res.status(200).send(
        JSON.stringify(beers)
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
    
    // beers.push({
        // id: id,
        // name: name,
        // tagline: tagline,
        // first_brewed: first_brewed,
        // description: description,
        // image_url: image_url,
        // abv: abv,
        // ph: ph 
    // })

    beerFunction(id, name, tagline, first_brewed, description, image_url, abv, ph)

    res.status(200).send(
        beers
    )
}