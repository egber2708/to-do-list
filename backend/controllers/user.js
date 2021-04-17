const Task = require("../models/task");
const User = require("../models/user");

exports.getUserByEmail = (req, res, next) => {
  User.findAll({where: {email: req.body.user.email, name: req.body.user.name}})
    .then((result) => {
      if (result.length) return res.status(200).json({status: true, data: result[0]});
      res.status(400).json({status: false, data: "Invalid User"});
    })
    .catch((err) => {
      res.status(400).json({status: false, data: err});
    });
};

exports.getUserTasks = (req, res, next) => {
  const userId = req.body.user.id;
  User.findByPk(userId, {include: Task})
    .then((result) => {
      res.status(200).json({status: true, result});
    })
    .catch((err) => {
      res.status(400).json({status: false, err});
    });
};

exports.addUser = (req, res, next) => {
  console.log({...req.body.user});
  User.create({...req.body.user})
    .then((result) => {
      res.status(200).json({status: true, data: "Your user has been successfully register"});
    })
    .catch((err) => res.status(400).json({status: false, err}));
};
