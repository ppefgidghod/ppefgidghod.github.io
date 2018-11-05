var express = require('express');
var router = express.Router();

var Todo = require('../lib/mongoose').Todo

router.get('/:itemId',function (req,res) {
    var itemId = req.params.itemId;
    Todo.findById(itemId,function (err,result) {
        Todo.findByIdAndUpdate(itemId,{
            isFinished:!result.isFinished
        },function (err1, result1) {
            if (err1) {
                console.log(err1)
            }
        })
    })
    res.redirect('/');
})
module.exports = router;