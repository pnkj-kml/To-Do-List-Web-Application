// const db = require('../config/mongoose');
const Todo = require('../models/to_do_list');

module.exports.home = function(req, res){
    Todo.find({}, function(err, taskList){
        if(err){
            console.log('Error while Fetching Taskd from database');
            return;
        }
        // console.log(taskList[0].due_date.toDateString());
        return res.render('home', {
            title : 'To-Do App',
            task_list : taskList
        });
    });
};

module.exports.createTask = function(req, res){
    console.log(req.body);
    Todo.create({
        details: req.body.task_Description,
        due_date: req.body.due_date,
        task_type : req.body.category
    }, function(err, newTask){
        if(err){
            console.log(`New task not added in db : ${err}`);
            return;
        }
        // console.log(`New Task added succesfully : ${newTask}`);
        return res.redirect('back');
    });
};

module.exports.deleteTask =  function(req, res){
    console.log(req.query);

    Todo.findByIdAndDelete(req.query.id, function(err){
        if(err){
            console.log("Task is not deleted from Database");
            return;
        }   
        
        return res.redirect('back'); 
    });
};
