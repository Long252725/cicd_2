// src/api.js
const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

app.get('/users', (req, res) => {
    const username = req.query.username;

    const dangerousQuery = "SELECT * FROM users WHERE username = '" + username + "'";

    db.all(dangerousQuery, [], (err, rows) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(rows);
    });
});

module.exports = app;