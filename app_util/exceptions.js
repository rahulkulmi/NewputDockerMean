/**
 * Custom exception.
 */
var msg = require('../app_util/messages')

module.exports = {
	NOT_AUTHORIZED: function(customMsg) {
		return { 'rcode': 401, 'httpCode': 401,
			'message': msg.notAuthorization, 'customMsg': customMsg }
	},
	INTERNAL_SERVER_ERROR: function(customMsg) {
		return { 'rcode': 500, 'httpCode': 500,
			'message': msg.serverProblem, 'customMsg': customMsg }
	},
	BAD_REQUEST: function(customMsg) {
		return { 'rcode': 400, 'httpCode': 400,
			'message': msg.badRequest, 'customMsg': customMsg }
	},
	RECORD_NOT_FOUND: function(customMsg) {
		return { 'rcode': 404, 'httpCode': 503,
			'message': msg.recordNotFound, 'customMsg': customMsg }
	},
	VERIFICATION_EXCEPTION: function(customMsg) {
		return { 'rcode': 402, 'httpCode': 402,
			'message': msg.verificationException, 'customMsg': customMsg }
	},
	VALIDATION_EXCEPTION: function(rcode, customMsg) {
		return { 'rcode': rcode, 'httpCode': 400,
			'message': msg.badRequest, 'customMsg': customMsg }
	}
}
