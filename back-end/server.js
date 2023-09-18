const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'api'
});

app.use(bodyParser.json());

db.connect((err) => {
	if(err) console.log('error: ' + err + 'occured')
	console.log('success')
})

app.get('/', (req, res) => {
	db.query('SELECT * FROM user', (error, data) => {
		if(error) {
			throw error
		}
		// res.json({title: 'hello world'})
		else {
			res.send({
                message: 'all data available',
                data: data
            });
			console.log(data);
		}
	})
})

app.get('/add', (req, res) => {
	const {Name, Email, Password } = req.body;
	db.query('INSERT INTO user SET ?', {Name: Name, Email: Email, Password: Password}, (error) => {
		if (error) console.log('error: ' + error + ' occured')
		console.log('entered successfully')
	})

	console.log('goooooo')
})

app.get('/id:', (req, res) => {
	const id = req.params.id
	const sql = `SELECT * FROM user WHERE ID = ${id} `;

	db.query(sql, id, (err, result) => {
		if(err) throw err;
		res.send({
			message: 'edited',
			data: result
		})
	})
})

app.listen(3000, () => {
	console.log('done and done');
});