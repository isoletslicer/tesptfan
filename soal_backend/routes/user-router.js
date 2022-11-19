const UserController = require("../controllers/UserController");
const authc = require("../middlewares/authc");

const routes = require("express").Router();

routes.post('/login', UserController.login)

routes.use(authc)
routes.get('/', UserController.getData)


module.exports = routes;