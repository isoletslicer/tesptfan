const express = require('express')
const cors = require("cors");
const errorHandler = require('./middlewares/errorHandling')
const routes = require("./routes")
const port = 3000;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(routes)

app.use(errorHandler)

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
