//calling router
const Router = require('express').Router()
//importing API routes
const ThoughtRoute = require('./ThoughtRoute');
const UserRoute = require('./UserRoute');
//router endpoints
Router.use('/thoughts',ThoughtRoute)
Router.use('/users',UserRoute)
//exporting routes
module.exports = Router;