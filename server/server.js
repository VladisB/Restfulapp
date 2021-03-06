const mongoose  =  require('./db/mongoose');
const {Todo}  =  require('./models/todo');
const {User}  =  require('./models/user');
const express  =  require('express');
const bodyParser  =  require('body-parser');

let port = 3000;
let app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	console.log(req.body);

	let todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc) => {
		res.send(doc);
	}).catch((err) => {
		res.status(400).send(err);
	});
});

app.listen(port, (req, res) => {
	console.log(`Server has been started on ${port} port`);
});