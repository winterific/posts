var express = require('express'),
    // bodyParser = require('body-parser'),
    // swig = require('swig'),
    app = express();

// swig.setDefaults({ cache: false });
// app.engine('html', swig.renderFile);
// app.set('view engine', 'jade');
// app.set('view cache', false);
// app.set('views', __dirname + '/views');

// app.use(bodyParser());
app.use(require("./apps/posts"));

var port = process.env.PORT || 8000;
app.listen(port, function () {
    console.log("Listening on port " + port);
});