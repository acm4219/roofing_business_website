const router = require("express").Router();
let User = require('../models/user');

router.route("/").get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/add").post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.password;

    const newUser = new User({
        username,
        password,
        email
    });

    newUser.save()
    .then(() => res.json('User Added!'))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;