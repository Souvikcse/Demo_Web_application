const route = require('express').Router();
const Product = require('../../db').Product;

route.get('/', (req, res) => {
    Product.findAll()
    .then((products) => {
        res.status(202).send(products)
    })
    .catch((err) => {res.status(404).send(err)})
})

route.post('/', (req, res) => {
    if(isNaN(req.body.price)){
        res.status(404).send('price is not float')
    }

    Product.create({
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        price: parseFloat(req.body.price)
    })
    .then((product) => {res.status(200).send(product)})
    .catch((err) => {res.status(403).send(err)})
})

module.exports = route