const Attachment = require('../models/Attachment');
const Task = require('../models/task');



exports.getTasks = async (req, res, next) => {
    Task.findAll({ include: Attachment })
        .then(res=>{
             res.status(200).json({status:true, data: result});
            })
        .catch(err=>{
             res.status(400).json({status:false, data: err})
            });
  };

exports.getTasksByUser = (req, res, next) => {
    Task.findAll({where: { userId: req.body.user.id }, include: Attachment })
        .then(res=>{
             res.status(200).json({status:true, data: result});
            })
        .catch(err=>{
             res.status(400).json({status:false, data: err})
            });
  };
  
exports.getTaskById =(req, res, next) => {
    const taskId = req.body.task.id;
    Task.findByPk(taskId, { include: Attachment })
    .then(res=>{
        res.status(200).json({status:true, data: result});
       })
    .catch(err=>{
        res.status(400).json({status:false, data: err})
       });
}

exports.addTask = (req, res, next) => {
  Task.create(req.body.task)
    .then((result) => {
      res.status(200).json({status:true, data: result});
    })
    .catch(err =>  res.status(400).json({status:false, data: err}));
};

exports.editTask = (req, res, next) => {
    const taskId = req.body.task.id;
    Task.findByPk(taskId)
        .then(task=>{
            task = req.body.task;
            return task.save()
        })
        .then((result) => {
            res.status(200).json({status:true, data: result});
          })
        .catch(err =>  res.status(400).json({status:false, data: err}));
};


exports.deleteTask = (req, res, next) => {
    const taskId = req.body.task.id;
    Task.findByPk(taskId)
        .then(task=>{
            return  task.destroy();
        })
        .then((result) => {
            res.status(200).json({status:true, data: result});
          })
        .catch(err =>  res.status(400).json({status:false, data: err}));
};