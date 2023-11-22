const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name : {type : String, required: true},
    done : {type : Boolean, required: true},
    checkList : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'CheckList',
        required: true
    }
});

module.exports = mongoose.model("Task", taskSchema)