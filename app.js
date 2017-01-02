var express = require('express')
var app = express()
var logger = require('morgan')
var expressValidator = require('express-validator')
var bodyParser = require('body-parser')
app.use(expressValidator({
	customValidators: {
		isArray: function(value) {
			return Array.isArray(value)
		}
	}
}))
var methodOverride = require('method-override')
var router = express.Router()
var session = require('express-session')
var config = require('./config/config')

// start setup the logger
var log = require('./app_util/logger')
log.format = ':remote-addr :remote-user ":method :url :status :response-time ms - :res[content-length] HTTP/:http-version" :req[header] :res[header] ":user-agent"'
app.use(logger(log.format, { 'stream': log.stream}))
// end setup the logger

//database connection
var mongoose = require('mongoose')
mongoose.Promise = global.Promise
var autoIncrement = require('mongoose-auto-increment')
var connection = mongoose.connect(config.mongodb.uri + config.mongodb.database)
autoIncrement.initialize(connection)

app.use(session({
	secret: 'cf73b1aa044c7510f87fee1ceea6cf7706a26dd9c6f266e72c4815eafe90f018b26c61a1ca69272af305bbc755e2ac3310b149610d1679b8dc302e42dcb81630',
	saveUninitialized: false, // don't create session until something stored
	resave: false, //don't save session if unmodified
}))
app.use(bodyParser.json())
app.use(methodOverride())
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*")
	res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, device_id, device_token")
	global.start = new Date().getTime()
	next()
})

// api routes
require('./routes/routes')(app, router)

// finally ready to listen
app.listen(config.port, function() {
	log.info('Listening on port ' + config.port)
})

module.exports = app
