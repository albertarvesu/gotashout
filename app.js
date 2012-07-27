var graph = require('fbgraph'),
    _ = require('underscore'),
    crypto = require('crypto'),
    express = require('express'),
    connect = require('connect'),
    MongoStore = require('connect-mongo'),
    mongoose = require('mongoose');

var config = {

    // Base URL of the App (must be a publically accessible URL)
    redirect_uri:  'http://fast-everglades-5138.herokuapp.com',

    // Facebook Application ID
    client_id:     '163130797156175',

    // Facebook Application Secret
    client_secret: 'f9a1c70450a522b22a8e0dfcb403f60c',

    // MongoDB endpoint
    mongoDb:       'mongodb://albertarvesu:bertneng@ds035897.mongolab.com:35897/gotashout',
    
    // Session encyption key
    sessionSecret: 'oasjdf0asduf0asd9f0adfks'
};

// App server setup
var app = express.createServer(
    connect.static(__dirname + '/public'),
    connect.cookieParser(),
    
    express.session({
        secret: config.sessionSecret,
        store: new MongoStore({ url: config.mongoDb })
    }),
    
    connect.bodyParser(),
    express.logger(),
    express.errorHandler({ dumpExceptions: true })
);

app.enable('jsonp callback');

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Listening on " + port);
});

