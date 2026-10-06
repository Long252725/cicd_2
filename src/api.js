// // src/api.js - Tính năng tìm kiếm người dùng
// const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database(':memory:');

// function searchUser(reqQuery, callback) {
//     const username = reqQuery; 

//     // DÒNG CODE GÂY RA LỖI SQL INJECTION:
//     const dangerousQuery = "SELECT * FROM users WHERE username = '" + username + "'";

//     db.all(dangerousQuery, [], (err, rows) => {
//         if (err) {
//             return callback(err, null);
//         }
//         callback(null, rows);
//     });
// }

// module.exports = { searchUser };