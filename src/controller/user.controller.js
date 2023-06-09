const { getAllUsers, createUser } = require('../servise/user.servise');

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const data = await getAllUsers();
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error.message)
    }
});

router.post('/', async (req, res) => {
    try {
        const { birth, city, age, name, surname } = req.body
        const data = await createUser(birth, city, age, name, surname);
        res.status(201).send(data)
    } catch (error) {
        res.status(405).send(error.message)
    }
});


module.exports = router;