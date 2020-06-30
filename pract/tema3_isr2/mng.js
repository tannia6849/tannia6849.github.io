const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const PORT = 4321;
const app = express();
const url = "mongodb+srv://admin:123@cluster0-pfaka.mongodb.net/users?retryWrites=true&w=majority";

MongoClient.connect(url, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('users')
    const usersCollection = db.collection('users')
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.set('view engine', 'pug')
    app.listen(process.env.PORT || PORT, async () => {
      console.log(`Старт процесса: ${process.pid}`)})
    app.get('/login', r => r.res.render('login'))

    // CREATE
    app.post('/login/send', (req, res) => {
      	usersCollection.insertOne(req.body)
    		.then(result => {
    			res.redirect('/login')
      			console.log(result)
      		})
    	})

    // READ
    app.get('/list', (req, res) => {
  		db.collection('users').find().toArray()
    	.then(results => {
      		res.render('list', { items: results })
    	})
    	.catch(error => console.error(error))
	})

	// UPDATE
	app.put('/login/upd', (req, res) => {
      	usersCollection.updateOne(
  			{ login: req.body.loginUpd },
  			{ $set: {pass: req.body.passUpd}}
		)
		.then(result => res.redirect('/login'))
    })

	// DELETE	
    app.delete('/login/delete', (req, res) => {
  		usersCollection.deleteOne(
    	{ login: req.body.loginDel }
  		)
        .then(result => res.redirect('/login'))
    })
  })
  .catch(error => console.error(error))
