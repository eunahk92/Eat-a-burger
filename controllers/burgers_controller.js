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
    burger.insert(req.body).then(result => res.json({ id: result.insertId}))
});

router.put("/api/burgers/:id", (req, res) => {
    let condition = {id: req.params.id};
    burger.update(req.body, condition)
    .then(result => result.affectedRows === 0 ? res.status(404).end() : res.status(200).end());
});

router.delete("/api/burgers/:id", (req, res) => {
    let condition = `id = ${req.params.id}`;
    burger.delete(condition)
    .then(result => result.affectedRows === 0 ? res.status(404).end() : res.status(200).end());
});

module.exports = router;
