var express = require('express');
var router = express.Router();

var Todo = require('../lib/mongoose').Todo
router.get('/',function (req,res) {
    res.send("get edit");
})
router.post('/:itemId',function (req,res) {
    console.log(req.body)
    var itemId = req.params.itemId;
    Todo.findByIdAndUpdate(itemId, {
        content: req.body.item
    }, (err) => {
        console.log('更改成功')
        res.redirect('/');
    })
})
module.exports = router;