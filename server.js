
'use strict';

var debug = require('debug')('botler')
var express = require('express')
var exec = require('child_process').exec
var app = express()

app.use(require('serve-static')(__dirname +'/public'))

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.route('/addToRepo')
	.post(function(req, res){
		var user = req.body.githubUser;
		exec('casperjs bots/addToGithub.js '+ user, function(err, stdout, stderr){
			console.log('stdout: %s', stdout);	
		});
//		res.send('<iframe src="https://localhost:9000"></iframe>');
		res.redirect('/');
	})

app.listen(3000)
