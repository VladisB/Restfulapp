let mongoose = require('mongoose');

let User = mongoose.model('User', {
	email: {
		type: String,
		required: true,
		trim:true,
		minlength: 5	
	}
});

// let newUser = new User({
// 	email:'test@gmail.com'
// });

// newUser.save().then((results) => {
// 	console.log('Save todo', results);
// }).catch((err) => {
// 	console.log('Unable to save todo', err);
// });

module.exports = {
	User
}