const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

function searchUser(reqQuery, callback) {
    const username = reqQuery; 

    const safeQuery = "SELECT * FROM users WHERE username = ?";

    db.all(safeQuery, [username], (err, rows) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, rows);
    });
}

module.exports = { searchUser };