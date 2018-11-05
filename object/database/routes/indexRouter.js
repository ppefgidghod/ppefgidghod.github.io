var express = require('express');
var router = express.Router();

var Todo = require('../lib/mongoose').Todo

router.get('/',function (req,res) {
    console.log('成功');
    Todo.find(function (err,result) {
        console.log(result);
        res.render('index',{
            title:'HEllo',
            items:result
        })
    })
})

router.post('/',function(req,res) {
    if (req.body.item) {
        Todo.create({
            content: req.body.item
        }, (err) => {
            if (err) {
                return console.log(err)
            }
            console.log('写入成功')
        })
    }
    res.redirect('/');
})
module.exports = router;