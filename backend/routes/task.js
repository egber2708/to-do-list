const express = require('express');
const taskController = require('../controllers/task');
const router = express.Router();

// /api/task/tasks => GET
router.get('/tasks', taskController.getTasks);

// /api/task/add-task => POST
router.post('/add-task', taskController.addTask);

// /api/task/edit-task/id => POST
router.post('/edit-task/:taskId', taskController.deleteTask);

// /api/task/edit-task/id => POST
router.post('/delete-task/:taskId', taskController.deleteTask);

module.exports = router;