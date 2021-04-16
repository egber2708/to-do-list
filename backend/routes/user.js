const express = require('express');
const userController = require('../controllers/user');
const router = express.Router();


// /api/user/signin  => POST
router.post('/signin ', userController.adduser);

// /api/user/login => POST
router.post('/login', userController.getUserByEmail);

// /api/user/Tasks => POST
router.post('/tasks', userController.getUserTasks);


module.exports = router;