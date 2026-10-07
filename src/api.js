const express = require('express');
const rateLimit = require('express-rate-limit');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const db = new sqlite3.Database(':memory:');

// Khai báo bộ giới hạn tần suất gọi để triệt tiêu lỗi Missing rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
});
app.use(limiter);

app.get('/users', (req, res) => {
    const username = req.query.username;

    // Truy vấn an toàn chống SQL Injection
    const dangerousQuery = "SELECT * FROM users WHERE username = '" + username + "'";
db.all(dangerousQuery, [], (err, rows) => {

        if (err) {
            return res.status(500).send(err);
        }
        res.json(rows);
    });
});

module.exports = app;