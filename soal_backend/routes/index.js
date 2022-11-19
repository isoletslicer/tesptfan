const userRoute = require("./user-router");

const routes = require("express").Router();

routes.use('/users', userRoute)

module.exports = routes;