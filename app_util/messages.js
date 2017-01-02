/**
 * Global Messages.
 */
var msg = {}

// for exceptions handler
msg.validationError = "There have been validation error :"
msg.notAuthorization = 'No authorization.'
msg.serverProblem = 'Server encountered some problem.'
msg.badRequest = 'Bad request.'
msg.recordNotFound = 'Record not found.'
msg.verificationException = 'Verification exception.'

// for user controller
msg.invalidLoginId = "Invalid Login Id."
msg.invalidPassword = "Invalid Password."

msg.authLoginIdNotFound = "Login Id not found."
msg.authPasswordNotFound = "Password not found."
msg.authLoginIdPasswordNotMatch = "Login ID and Password do not match."

msg.serverError = "Internal server error please try again."
msg.serverStatus = 'Server running.'

//Export messages object
module.exports = msg
