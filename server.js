const express = require("express");
// eslint-disable-next-line no-unused-vars
// const bodyParser = require('body-parser');
const mysql = require("mysql");
const cors = require("cors");
const path = require("path");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "bc96ab8d610338",
    host: "us-cdbr-east-06.cleardb.net",
    password: "58b00561",
    database: "heroku_2d306ce687fb51a",
});

app.post('/Register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "INSERT INTO users (username, password) VALUES (?,?)",
        [username, password],
        (err, result) => {
            console.log(err);
        }
    );
});

app.post('/Login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users WHERE username = ? AND password = ?",
        [username, password],
        (err, result) => {
            if (err) {
                res.send({ err: err});
            }

            if (result.length > 0) {
                res.send(result);
            } else {
                res.send({ message: "Wrong username/password combination!"});
            }
        }
    );
});

app.use(express.static(path.join(__dirname, "build")));

// This route serves the React app
app.get('/*', (req, res) => res.sendFile(path.resolve(__dirname, "build", "index.html")));

app.listen(port, () => console.log(`Server listening on port ${port}`));