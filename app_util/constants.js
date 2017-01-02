/**
 * Global Constants.
 */
var cons = {}

// response header key
cons.RES_HEADER_CONTENT_TYPE = 'Content-Type'
cons.RES_HEADER_APPL_TYPE = 'application/json'
cons.RES_HEADER_APPL_CHAR_TYPE = 'application/json; charset=utf-8'

// response key
cons.RES_KEY_DATA = 'data'
cons.RES_KEY_ERROR = 'error'
cons.RES_KEY_RCODE = 'rcode'
cons.RES_KEY_SUCCESS = 'success'
cons.RES_KEY_PROCESS_TIME = 'processingTimeMillis'

// response status code
cons.RES_STATUS_OK = 200
cons.RES_STATUS_400 = 400
cons.RES_STATUS_402 = 402
cons.RES_STATUS_404 = 404
cons.RES_STATUS_503 = 503

cons.ID = '_id'
	
// user data key name
cons.USER_FIRST_NAME = 'firstName'
cons.USER_LAST_NAME = 'lastName'
cons.USER_LOGIN_ID = 'loginId'
cons.USER_PASSWORD = 'password'
cons.USER_PHONE_NUMBER = 'phoneNumber'
cons.USER_ADDRESS = 'address'

// test phone number
cons.TEST_LOGIN_ID = 'abc@gmail.com'
cons.TEST_PASSWORD = 'abc123'
cons.TEST_WRONG_PASSWORD = '123abc'
cons.TEST_FIRST_NAME = 'abc'
cons.TEST_LAST_NAME = 'xyz'
cons.TEST_PHONE_NUMBER = 123456789
cons.TEST_ADDRESS = 'Indore'

//Export constants object
module.exports = cons
