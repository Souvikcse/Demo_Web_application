const route = require('express').Router();
const User = require('../../db').User;

route.get('/', (req, res) => {
    User.findAll()
    .then((users) => {
        res.status(200).send(users)
    })
    .catch((err) => {
        res.status(404).send(err)
    })
})

route.post('/', (req, res) => {
    //We expect the req to have user name, id(optional)

    User.create({
        name: req.body.name
    })
    .then((user) => {
        res.status(201).send(user)
    })
    .catch((err) => {
        res.send(err)
    })
})

module.exports = route;