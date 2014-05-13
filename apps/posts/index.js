var express = require('express'),
    bodyParser = require('body-parser'),
    app = module.exports = express();

app.use(bodyParser());
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.route('/')
.get(function (req, res, next) {
    var model = {
        name : "Sam Winter"
    };
    res.render("index", {model: model});
})
.post(function (req, res, next) {
    var model = req.body;
    if (!model.name) {
        model.errors = ["Please enter a name."];
    }
    res.render("index", { model: model });
});
