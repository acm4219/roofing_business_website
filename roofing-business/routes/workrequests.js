const router = require("express").Router();
let WorkRequest = require('../models/workrequest');

router.route("/").get((req, res) => {
    WorkRequest.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    const address = req.body.address;
    const insurance = req.body.insurance;
    const service = req.body.service;
    const details = req.body.details;

    const newWorkRequest = new WorkRequest({
        name,
        email,
        phoneNumber,
        address,
        insurance,
        service,
        details,
    });

    newWorkRequest.save()
    .then(() => res.json("Request Added"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route('/:id').get((req, res) => {
    WorkRequest.findById(req.params.id)
     .then(workrequest => res.json(workrequest))
     .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/:id").delete((req, res) => {
    WorkRequest.findByIdAndDelete(req.params.id)
     .then(() => res.json('Request deleted.'))
     .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    WorkRequest.findById(req.params.id)
     .then(workrequest => {
         workrequest.name = req.body.name;
         workrequest.email = req.body.email;
         workrequest.phoneNumber = req.body.phoneNumber;
         workrequest.address = req.body.address;
         workrequest.insurance = req.body.insurance;
         workrequest.service = req.body.service;
         workrequest.details = req.body.details;
     });
});

module.exports = router;