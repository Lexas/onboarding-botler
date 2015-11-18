
'use strict';

var debug = require('debug')('botler')
var express = require('express')
var app = express()

app.use(require('serve-static')(__dirname +'/public'))

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.listen(3000)
