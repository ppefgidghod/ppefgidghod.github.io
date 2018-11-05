var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var indexRouter = require('./routes/indexRouter');
var editRouter = require('./routes/editRouter');
var deleteRouter = require('./routes/deleteRouter');
var toggleRouter = require('./routes/toggleRouter');

app.use(express.static('public'));

app.set("views","./views");
app.set("view engine","ejs");

app.use(bodyParser.urlencoded({
    extended:false
}))

app.use("/",indexRouter);
app.use("/edit",editRouter);
app.use("/delete",deleteRouter);
app.use("/toggle",toggleRouter);

app.listen(8080,function () {
    console.log("App listening on port 8080!");
})