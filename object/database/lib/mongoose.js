var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/data-test',function(err) {
    if (err) {
        console.log('数据库连接失败');
    } else {
        console.log('数据库连接成功');
    }
})

var todoSchema = new mongoose.Schema({
    content:String,
    isFinished:{
        type:Boolean,
        default:false
    }
})

var Todo = mongoose.model('Todo',todoSchema)

exports.Todo = Todo;