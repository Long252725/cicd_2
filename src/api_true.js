
// src/api.js
const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

app.get('/users', (req, res) => {
    // 1. SOURCE: Dữ liệu trực tiếp từ query param của người dùng
    const username = req.query.username;

    // 2. TAINTED STRING: Nối chuỗi nguy hiểm
    const safeQuery = "SELECT * FROM users WHERE username = ?";


    // 3. SINK: Thực thi truy vấn vào SQLite
    db.all(safeQuery, [username], (err, rows) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(rows);
    });
});

module.exports = app;