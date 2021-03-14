import express, { Router } from "express";
const DB = require('../../db/knex');
const _ = require('lodash');
const GroupController = require("../controllers/GroupController");
const TaskController = require("../controllers/TaskController");


export function columnsRouter() {
    const router = Router();

    router.post('/columns', (req, res) => GroupController.saveColumn(req, res));
    router.put('/columns/:id', (req, res) => GroupController.updateColumn(req, res));
    router.get('/columns', (req, res) => GroupController.getColumns(req, res));
    router.post('/columns/:id/tasks', (req, res) => GroupController.storeTask(req, res));
    router.post('/columns/:id/reorder-tasks', (req, res) => GroupController.reorderTasks(req, res));
    router.delete('/delete-column/:id', (req, res) => GroupController.deleteColumn(req, res));

    return router;
}

export function tasksRouter() {
    const router = Router();

    router.put('/tasks/:id', (req, res) => TaskController.updateTask(req, res));
    router.delete('/delete-tasks/:id', (req, res) => TaskController.deleteTask(req, res));

    return router;
}