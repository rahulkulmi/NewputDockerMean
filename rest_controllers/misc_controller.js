/**
 * Miscellaneous Controller.
 */
var response = require('../services/api_response')
var appException = require('../app_util/exceptions')
var msg = require('../app_util/messages')

module.exports.pingServer = function(req, res) {
	try {
		response.successResponse(req, res, msg.serverStatus)
	} catch (err) {
		response.errorResponse(req, res, appException.INTERNAL_SERVER_ERROR(), err.stack)
	}
}
