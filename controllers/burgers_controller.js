const express = require("express");
const orm = require("../config/orm.js");

const router = express.Router();

// Create all our routes and set up logic within those routes where required.

router.get("/", (req, res) => {
    orm.all("burgers").then(data => {
        let hbsObject = {
          burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", (req, res) => {
    orm.insert("burgers", ["burger_name", "devoured"], [req.body.burger_name, req.body.devoured])
    .then(result => res.json({ id: result.insertId}))
});

router.put("/api/burgers/:id", (req, res) => {
    let condition = {id: req.params.id};
    console.log(req.body);
    orm.update("burgers", req.body, condition)
    .then(result => {
        if (result.affectedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", (req, res) => {
    let condition = `id = ${req.params.id}`;
    orm.delete("burgers", condition).then(result => {
        if (result.affectedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end(); 
    });
});

module.exports = router;
