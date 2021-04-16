const Task = require('../models/task');
const User = require('../models/user');



exports.getUserByEmail =(req, res, next) => {
    const userId = req.body.user.id;
    User.findOne({ where: {email: req.body.user.email, name: req.body.user.name} })
    .then(res=>{
        res.status(200).json({status:true, data: result});
       })
    .catch(err=>{
        res.status(400).json({status:false, data: err})
       });
}

exports.getUserTasks =(req, res, next) => {
    const userId = req.body.user.id;
    User.findByPk(userId, { include: Task })
    .then(res=>{
        res.status(200).json({status:true, data: result});
       })
    .catch(err=>{
        res.status(400).json({status:false, data: err})
       });
}

exports.addUser = (req, res, next) => {
  User.create(req.body.user)
    .then((result) => {
      res.status(200).json({status:true, data: result});
    })
    .catch(err =>  res.status(400).json({status:false, data: err}));
};
