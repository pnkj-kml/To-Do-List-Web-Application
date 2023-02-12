const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    details:{
        type: String,
        required: true
    },
    due_date:{
        type: Date,
        required: true
    },
    task_type:{
        type: String,
        required: true
    }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;