var chai = require('chai')
var chaiHttp = require('chai-http')
var app = require('../../app')
var msg = require('../../app_util/messages')
var cons = require('../../app_util/constants')
var expect = chai.expect
chai.use(chaiHttp)

describe('===== User Controller API Tests =====', function() {
	/*
	 * Test the POST route for auth/login
	 */
	it('it should GET user info when Login Id not found.', function(done) {
		chai.request(app)
			.post('/rest/v1/auth/login')
			.set(cons.RES_HEADER_CONTENT_TYPE, cons.RES_HEADER_APPL_TYPE)
			.end(function(err, res) {
//				if (err) return done(err)
//	        	console.log(res.body)
				expect(res).to.be.json
				expect(res).to.have.status(cons.RES_STATUS_400)
				expect(res.body.success).to.equal(false)
				expect(res.body.data).to.equal(null)
				expect(res.body.error).to.equal(msg.badRequest)
				expect(res.body.rcode).to.equal(cons.RES_STATUS_400)
				expect(res.body.customMsg).to.equal(msg.validationError + ' ' + msg.authLoginIdNotFound)
				expect(res.body).to.have.property(cons.RES_KEY_PROCESS_TIME)
				done()
			})
	})
	/*
	 * Test the POST route for auth/login
	 */
	it('it should GET user info when Password not found.', function(done) {
		chai.request(app)
			.post('/rest/v1/auth/login')
			.set(cons.RES_HEADER_CONTENT_TYPE, cons.RES_HEADER_APPL_TYPE)
			.send({ 'loginId': cons.TEST_LOGIN_ID })
			.end(function(err, res) {
//				if (err) return done(err)
//	        	console.log(res.body)
				expect(res).to.be.json
				expect(res).to.have.status(cons.RES_STATUS_400)
				expect(res.body.success).to.equal(false)
				expect(res.body.data).to.equal(null)
				expect(res.body.error).to.equal(msg.badRequest)
				expect(res.body.rcode).to.equal(cons.RES_STATUS_400)
				expect(res.body.customMsg).to.equal(msg.validationError + ' ' + msg.authPasswordNotFound)
				expect(res.body).to.have.property(cons.RES_KEY_PROCESS_TIME)
				done()
			})
	})
	/*
	 * Test the POST route for auth/login
	 */
	it('it should GET user info when Login id and Password not match.', function(done) {
		chai.request(app)
			.post('/rest/v1/auth/login')
			.set(cons.RES_HEADER_CONTENT_TYPE, cons.RES_HEADER_APPL_TYPE)
			.send({ 'loginId': cons.TEST_LOGIN_ID, 'password': cons.TEST_WRONG_PASSWORD })
			.end(function(err, res) {
//				if (err) return done(err)
//	        	console.log(res.body)
				expect(res).to.be.json
				expect(res).to.have.status(cons.RES_STATUS_402)
				expect(res.body.success).to.equal(false)
				expect(res.body.data).to.equal(null)
				expect(res.body.error).to.equal(msg.verificationException)
				expect(res.body.rcode).to.equal(cons.RES_STATUS_402)
				expect(res.body.customMsg).to.equal(msg.authLoginIdPasswordNotMatch)
				expect(res.body).to.have.property(cons.RES_KEY_PROCESS_TIME)
				done()
			})
	})
	/*
	 * Test the POST route for auth/login
	 */
	it('it should GET user info when Login id and Password match.', function(done) {
		chai.request(app)
			.post('/rest/v1/auth/login')
			.set(cons.RES_HEADER_CONTENT_TYPE, cons.RES_HEADER_APPL_TYPE)
			.send({ 'loginId': cons.TEST_LOGIN_ID, 'password': cons.TEST_PASSWORD })
			.end(function(err, res) {
				if (err) return done(err)
//	        	console.log(res.body)
				expect(res).to.be.json
				expect(res).to.have.status(cons.RES_STATUS_OK)
				expect(res.body).to.have.property(cons.RES_KEY_DATA)
				expect(res.body).to.have.property(cons.RES_KEY_PROCESS_TIME)
				expect(res.body.success).to.equal(true)
				expect(res.body.error).to.equal(null)
				expect(res.body.rcode).to.equal(null)
				done()
			})
	})
	/*
	 * Test the POST route for user
	 */
	it('it should POST test user info into database.', function(done) {
		chai.request(app)
			.post('/rest/v1/user')
			.set(cons.RES_HEADER_CONTENT_TYPE, cons.RES_HEADER_APPL_TYPE)
			.send({
				'loginId': cons.TEST_LOGIN_ID,
				'password': cons.TEST_PASSWORD,
				'firstName': cons.TEST_FIRST_NAME,
				'lastName': cons.TEST_LAST_NAME,
				'phoneNumber': cons.TEST_PHONE_NUMBER,
				'address': cons.TEST_ADDRESS
			})
			.end(function(err, res) {
				if (err) return done(err)
//	        	console.log(res.body)
				expect(res).to.be.json
				expect(res).to.have.status(cons.RES_STATUS_OK)
				expect(res.body).to.have.property(cons.RES_KEY_DATA)
				expect(res.body).to.have.property(cons.RES_KEY_PROCESS_TIME)
				expect(res.body.success).to.equal(true)
				expect(res.body.error).to.equal(null)
				expect(res.body.rcode).to.equal(null)
				done()
			})
	})
})
