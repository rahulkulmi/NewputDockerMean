/**
 * Api custom response.
 */
var log = require('../app_util/logger')
var cons = require('../app_util/constants')

module.exports.successResponse = function(req, res, data, customMsg) {
	res.setHeader(cons.RES_HEADER_CONTENT_TYPE, cons.RES_HEADER_APPL_TYPE)
	var result = { 'success': true, 'data': data, 'error': null, 'rcode': null,
		'customMsg': customMsg, 'processingTimeMillis': (new Date().getTime() - global.start) }
	res.status(200).send(result)
}

module.exports.errorResponse = function(req, res, appError, coreException) {
	res.setHeader(cons.RES_HEADER_CONTENT_TYPE, cons.RES_HEADER_APPL_TYPE)
	var result = { 'success': false, 'data': null, 'error': appError.message,
		'rcode': appError.rcode, 'customMsg': appError.customMsg,
		'processingTimeMillis': (new Date().getTime() - global.start),
		'coreException': coreException }
	var reqIP = req.connection.remoteAddress
	var reqHeader = JSON.stringify(res.req.headers)
	var resAPI = JSON.stringify(result)
	log.warn('Request IP : ' + reqIP + ', Request headers : ' + reqHeader + ', API Response : ' + resAPI)
	res.status(appError.httpCode).send(result)
}
