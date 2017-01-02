/**
 * User Controller.
 */
var response = require('../services/api_response')
var userService = require('../services/user_service')
var appException = require('../app_util/exceptions')
var msg = require('../app_util/messages')

module.exports.loginUser = function(req, res) {
	try {
		req.checkBody('loginId', msg.authLoginIdNotFound).notEmpty()
		req.checkBody('password', msg.authPasswordNotFound).notEmpty()
		var errors = req.validationErrors()
		if (errors) {
			return response.errorResponse(req, res, appException.BAD_REQUEST(msg.validationError + ' ' + errors[0].msg))
		}

		var reqData = req.body
		userService.loginUser(reqData, function(err, userRes) {
			if (err) {
				response.errorResponse(req, res, appException.INTERNAL_SERVER_ERROR(), err.stack)
			} else if(userRes === msg.authLoginIdPasswordNotMatch) {
				response.errorResponse(req, res, appException.VERIFICATION_EXCEPTION(userRes))
			} else {
				response.successResponse(req, res, userRes)
			}
		})
	} catch (err) {
		response.errorResponse(req, res, appException.INTERNAL_SERVER_ERROR(), err.stack)
	}
}
