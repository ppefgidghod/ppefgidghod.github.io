var express = require('express')
var router = express.Router();
var Todo = require('../lib/mongoose').Todo

router.get('/:itemId',function (req,res) {
    var itemId = req.params.itemId;
    Todo.findByIdAndDelete(itemId,function (err) {
        console.log('删除成功');
    })
    res.redirect('/');
})

module.exports = router;