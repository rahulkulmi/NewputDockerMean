/**
 * Routes for v1.
 */
module.exports = function(app, router) {
	var miscController = require('../rest_controllers/misc_controller')
	var userController = require('../rest_controllers/user_controller')

	// api routes
	router.post('/auth/login', userController.loginUser)
	router.post('/user', userController.addUser)

	router.get('/ping', miscController.pingServer)

	app.use('/rest/v1', router)
}
