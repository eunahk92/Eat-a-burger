const orm = require("../config/orm.js");

let burger = {
    all() {
        return orm.all("burgers");
    },
    insert(cols, vals) {
        return orm.insert("burgers", cols, vals);
    },
    update(newDataObj, condition) {
        return orm.update("burgers", newDataObj, condition);
    },
    delete(condition) {
        return orm.delete("burgers", condition)
    }
}

module.exports = burger;