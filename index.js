const express = require("express");
const mysql = require("mysql");
const cors = require('cors');

const app = express();

app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "root",
    database: "tastybites",
});

app.post('/Register', (req, res) => {
    const sql = "INSERT INTO users (`username`,`password`) VALUES (?)";
    const values = [
        req.body.username,
        req.body.password
    ]
    db.query(sql, [values], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.listen(3301, () => {
    console.log("running mysql server");
});