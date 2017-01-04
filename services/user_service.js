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

module.exports.addUser = function(reqData, callback) {
	var options = { upsert: true, new: true }
	var query = { loginId: reqData.loginId }
	var userJson = {
			loginId: reqData.loginId,
			password: reqData.password,
			firstName: reqData.firstName,
			lastName: reqData.lastName,
			phoneNumber: reqData.phoneNumber,
			address: reqData.address
	}
	User.findOneAndUpdate(query, userJson, options, function(err, userRes) {
		if (err) return callback(err)
		// Check that a user was found
		if (userRes === undefined || userRes === null) {
			return callback(null, msg.serverProblem)
		} else {
			return callback(null, userRes)
		}
	})
}
