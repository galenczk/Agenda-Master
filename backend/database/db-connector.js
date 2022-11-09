// import dependencies
const mysql = require("mysql")

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "classmysql.engr.oregonstate.edu",
  user: "cs340_ciszekg",
  password: "9745",
  database: "cs340_ciszekg"
})

module.exports.pool = pool