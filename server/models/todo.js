let mongoose = require('mongoose');

let Todo = mongoose.model('Todo', {
	text: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	complited: {
		type: Boolean,
		default: false
	},
	complitedAt: {
		type: Number,
		default: null
	}
});

// let newTodo = new Todo({
// 	text: 'go home at the weekend'
// });

// newTodo.save().then((results) => {
// 	console.log('Save todo', results);
// }).catch((err) => {
// 	console.log('Unable to save todo', err);
// });

module.exports = {
	Todo
};