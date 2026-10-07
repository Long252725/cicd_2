const express = require('express');
const rateLimit = require('express-rate-limit');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const db = new sqlite3.Database(':memory:');

// Chặn lỗi Missing rate limiting của CodeQL
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
});
app.use(limiter);

app.get('/users', (req, res) => {
    const username = req.query.username;

    // Chặn lỗi SQL Injection
    const safeQuery = "SELECT * FROM users WHERE username = ?";

    db.all(safeQuery, [username], (err, rows) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(rows);
    });
});

module.exports = app;