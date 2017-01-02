// Seed data for user service.
var cons = require('../../app_util/constants')

module.exports.loginUser_1 = function() {
	var reqData = { 
			loginId: cons.TEST_LOGIN_ID,
			password: cons.TEST_PASSWORD
	}
	return reqData
}

module.exports.loginUser_2 = function() {
	var reqData = { 
			loginId: cons.TEST_LOGIN_ID,
			password: cons.TEST_WRONG_PASSWORD
	}
	return reqData
}
