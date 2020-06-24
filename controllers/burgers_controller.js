const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", (req, res) => {
    burger.all().then(data => {
        let hbsObject = {
          burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.insert(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured])
    .then(result => res.json({ id: result.insertId}))
});

router.put("/api/burgers/:id", (req, res) => {
    let condition = {id: req.params.id};
    burger.update(req.body, condition).then(result => {
        if (result.affectedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", (req, res) => {
    let condition = `id = ${req.params.id}`;
    burger.delete(condition).then(result => {
        if (result.affectedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end(); 
    });
});

module.exports = router;
