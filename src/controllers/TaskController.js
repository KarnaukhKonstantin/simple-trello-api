const DB = require('../../db/knex');
const _ = require('lodash');
import Task from "../models/Task";

export function updateTask(req, res) {
    const data = req.body;
    const id = req.params.id;

    Task.query()
        .where('id', id)
        .update({name: data.name, description: data.description})
        .then(() => {
            console.log('success');
        });

    res.send('success');
}

export function deleteTask(req, res) {
    const id = req.params.id;

    Task.query()
        .where('id', id)
        .del()
        .then(() => {
        console.log('success');
    });

    res.send('Success')
}