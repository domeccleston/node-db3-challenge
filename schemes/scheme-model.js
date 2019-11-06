const db = require('../data/db-config');

function find() {
    return db('schemes');
}

function findById(id) {
    return db('schemes').where({ id }).first();
}

function findSteps(id) {
    return db('steps').where({ scheme_id: id }).orderBy();
}

function add(scheme) {
    return db('schemes').insert(scheme);
}

function update(changes, id) {
    return db('schemes').where({ id }).first().update(changes);
}

function remove(id) {
    return db('schemes').where({ id }).first().del();
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
}