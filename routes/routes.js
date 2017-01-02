/**
 * Rest api routes
 */
module.exports = function(app, router) {
	require('./v1')(app, router)
};
