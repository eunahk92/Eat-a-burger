const orm = require("../config/orm.js");

let burger = {
    all: () => orm.all("burgers"),
    insert: newData => orm.insert("burgers", newData),
    update: (newDataObj, condition) => orm.update("burgers", newDataObj, condition),
    delete: condition => orm.delete("burgers", condition)
}

module.exports = burger;