const db = require("../models");

const User = db.user; 
const Op = db.Sequelize.Op;

module.exports = function(app) {

    //requests api
    
    app.get("/api/results", function (req, res) {
        db.Request.findAll().then(function (dbRequests) {
            res.json(dbRequests);
        });
    });

    app.get("/api/result/:id", function(req, res) {
        db.Request.findOne({
            where: {
                id: req.params.id,
            },
        })
         .then(function(result) {
             console.log("item", result);
             res.json(result);
         })
         .catch(function (err) {
             console.log(err);
         });
    });

    app.post("/api/request/postnewrequest", function(req, res) {
        db.item.create({
            name: req.body.name,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            homeAddress: req.body.homeAddress,
            insuranceProvider: req.body.insuranceProvider,
            service: req.body.service,
            detail: req.body.detail
        })
         .then(function(result){
             console.log("Item was posted successfully");
             res.sendStatus(200);
         })
         .catch(function(err) {
             console.log(err);
         });
    });

    app.delete("/api/deleteitem/:id", function(req, res) {
        db.Request.destroy({
            where: {
                id: req.params.id,
            },
        })
         .then(function(result) {
             console.log("Item was successfully deleted");
             res.json(result);
         })
         .catch(function(err){
             console.log(err);
         });
    });

    //users api only going to be jeremy most likely

    app.get("/api/user/", function(req, res) {
        db.User.findAll().then(function(dbUsers) {
            res.json(dbUsers);
        });
    });

    app.post("/api/newuser/", function(req, res) {
        db.User.create({
           userName: req.body.userName,
           userEmail: req.body.userEmail,
           password: req.body.password, 
        })
         .then(function(result) {
             console.log("user added to DB");
             res.json(result);
             const resJson = res.json(result);
             console.log("controller json response of result: ", resJson);
             res.sendStatus(200);
         })
         .catch(function(err) {
             console.log(err);
         });
    });
};