/**
 * User collections.
 */
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	firstName: { type: String },
	lastName: { type: String },
	loginId: { type: String },
	password: { type: String },
	phoneNumber: { type: Number },
	address: { type: String }
});

module.exports = mongoose.model('User', userSchema);
