/**
 * Global Configuration.
 */
var cfg = {}

var processEnv = process.env.NODE_ENV || 'development'
var env = require('./' + processEnv + '.json')


cfg.mongodb = {}

cfg.mongodb.uri = env.MONGO_URI
cfg.mongodb.dockerUri = 'mongodb://' + process.env.MONGODB_PORT_27017_TCP_ADDR + ':' + process.env.MONGODB_PORT_27017_TCP_PORT
cfg.mongodb.database = env.MONGO_DB

cfg.host = env.HOST
cfg.port = env.PORT

//Export configuration object
module.exports = cfg
