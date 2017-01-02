/**
 * User service
 */
var User = require('../models/user')
var msg = require('../app_util/messages')

module.exports.loginUser = function(reqData, callback) {
	var query = { loginId: reqData.loginId, password: reqData.password }
	User.findOne(query, function(err, userRes) {
		if (err) return callback(err)
		// Check that a user was found
		if (userRes === undefined || userRes === null) {
			return callback(null, msg.authLoginIdPasswordNotMatch)
		} else {
			return callback(null, userRes)
		}
	})
}
