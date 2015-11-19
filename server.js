
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
	.get(function(req, res){
		exec('casperjs bots/addToGithub.js --remote-debugger-port=9000 ', function(err, stdout, stderr){
			console.log('stdout: %s', stdout);	
		});
		res.send('<iframe src="https://localhost:9000"></iframe>');
	})

app.listen(3000)
