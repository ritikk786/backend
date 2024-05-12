const http = require('http')

const express = require('express');

//use for extract the text into readable form
const bodyParser = require('body-parser')

const app = express();

// importing  page functions
const loginRouter = require('./Authentication/login')
const messageRouter = require('./message/message')

// active bodyParse function so that they execute on every page and referesh
app.use(bodyParser.urlencoded({extended : false}))

// executing Page function
app.use(loginRouter)
app.use(messageRouter)


// const server = http.createServer(app)
// server.listen(3000)

app.listen(3000)
