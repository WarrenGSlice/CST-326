require('dotenv').config(); 
const express = require("express");
// eslint-disable-next-line no-unused-vars
const bodyParser = require('body-parser');
const path = require("path");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

const corsOption = {
    origin: 'http://localhost:3001'
}

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors(corsOption));

const db = require("./src/models");
const Role = db.role;

db.sequelize.sync();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// routes for auth and users
require('./src/routes/auth.routes')(app);
require('./src/routes/user.routes')(app);

app.use(express.static(path.join(__dirname, "build")));

// This route serves the React app
app.get('/*', (req, res) => res.sendFile(path.resolve(__dirname, "build", "index.html")));

app.listen(port, () => console.log(`Server listening on port ${port}`));