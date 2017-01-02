var chai = require('chai')
require('../../app')
var expect = chai.expect
var msg = require('../../app_util/messages')
var cons = require('../../app_util/constants')
var userService = require('../../services/user_service')
var seedUserService = require('../seed/user_service')

describe('===== User Service Unit Tests =====', function() {
	/*
	 * Test the loginUser function for user_service
	 */
	it('it should test loginUser function when login id and password match.', function(done) {
		var reqData = seedUserService.loginUser_1()
		userService.loginUser(reqData, function(err, userRes) {
			if (err) return done(err)
//			console.log(userRes)
			expect(userRes).to.be.json
			expect(userRes).to.have.property(cons.ID)
			expect(userRes.password).to.equal(cons.TEST_PASSWORD)
			expect(userRes.firstName).to.equal(cons.TEST_FIRST_NAME)
			expect(userRes.address).to.equal(cons.TEST_ADDRESS)
			expect(userRes.phoneNumber).to.equal(cons.TEST_PHONE_NUMBER)
			expect(userRes.loginId).to.equal(cons.TEST_LOGIN_ID)
			expect(userRes.lastName).to.equal(cons.TEST_LAST_NAME)
			done()
		})
	})
	/*
	 * Test the loginUser function for user_service
	 */
	it('it should test loginUser function when login id and password not match.', function(done) {
		var reqData = seedUserService.loginUser_2()
		userService.loginUser(reqData, function(err, userRes) {
//			console.log(userRes)
//			if (err) return done(err)
			expect(userRes).to.be.json
			expect(userRes).to.equal(msg.authLoginIdPasswordNotMatch)
			done()
		})
	})
})
