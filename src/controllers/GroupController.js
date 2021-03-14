const DB = require('../../db/knex');
const _ = require('lodash');
import Group from "../models/Group";
import Task from "../models/Task";

export function saveColumn(req, res) {
    Group.query()
        .insert({name: req.body.name})
        .then(() => {
            res.send('success');
        });
}

export function updateColumn(req, res) {
    const id = req.params.id;
    const data = req.body;

    Group.query()
        .where('id', id)
        .update({name: data.name})
        .then(() => {
            console.log('success');
        });

    res.send('Success')
}

export function deleteColumn(req, res) {
    const id = req.params.id;

    Task.query().where('group_id', id).del().then(() => {
        console.log('success');
    });
    Group.query().where('id', id).del().then(() => {
        console.log('success');
    });

    res.send('Success')
}

export async function getColumns(req, res) {
    const groups = await Group.query();
    const tasks = await Task.query().orderBy('order', 'asc');

    const columns = groups.map(function (group) {
        group.items = tasks.filter(task => task.group_id === group.id);
        return group;
    });

    res.json({columns});
}

export function storeTask(req, res) {
    Task.query()
        .insert(req.body)
        .then(() => {
            res.send('success');
        });
}

export function reorderTasks(req, res) {
    const data = req.body;
    const items = data.items;

    for(let i = 0; i < items.length; i++) {
        Task.query()
            .where('id', items[i].id)
            .update({group_id: data.id, order: i+1})
            .then(()=>{
                console.log('success');
            });
    }

    res.send('success');
}