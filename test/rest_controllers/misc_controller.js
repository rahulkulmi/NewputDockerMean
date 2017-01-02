var chai = require('chai')
var chaiHttp = require('chai-http')
var app = require('../../app')
var cons = require('../../app_util/constants')
var msg = require('../../app_util/messages')
//var should = chai.should()
var expect = chai.expect
chai.use(chaiHttp)

describe('===== Misc Controller API Tests =====', function() {
	/*
	 * Test the GET route for ping
	 */
	it('it should GET server status.', function(done) {
		chai.request(app)
		.get('/rest/v1/ping')
		.set(cons.RES_HEADER_CONTENT_TYPE, cons.RES_HEADER_APPL_TYPE)
		.end(function(err, res) {
			if (err) return done(err)
//            console.log(res.body)
			expect(res).to.be.json
//			res.should.have.status(cons.RES_STATUS_OK)
//			res.body.should.have.property(cons.RES_KEY_SUCCESS).eql(true)
//			res.body.should.have.property(cons.RES_KEY_DATA).eql(msg.serverStatus)
//			res.body.should.have.property(cons.RES_KEY_ERROR).eql(null)
//			res.body.should.have.property(cons.RES_KEY_RCODE).eql(null)
//			res.body.should.have.property(cons.RES_KEY_PROCESS_TIME)
			expect(res).to.have.status(cons.RES_STATUS_OK)
			expect(res.body.success).to.equal(true)
			expect(res.body.data).to.equal(msg.serverStatus)
			expect(res.body.error).to.equal(null)
			expect(res.body.rcode).to.equal(null)
			expect(res.body).to.have.property(cons.RES_KEY_PROCESS_TIME)
			done()
		})
	})
})
