const mongooes = require('mongoose');
const Schema = mongooes.Schema;

const userSchema = new Schema({
	id: String,
    email: String,
    isMember: Boolean,
});

module.exports = mongooes.model('User', userSchema);