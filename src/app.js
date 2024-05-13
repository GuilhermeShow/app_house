const express = require("express");
const routes = require("../src/routes/user");
const bodyParser = require("body-parser");
const cors = require("cors");

class App {

    constructor() {
        this.server = express()
        this.middware();
        this.routes();
    }

    middware() {
        this.server.use(bodyParser.json())
    }

    routes() {
        this.server.use(routes);
    }   

}

module.exports = new App().server;