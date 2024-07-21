import mysql from "mysql2";

/**
 * mysql2를 import하여 db connect
 */
const pool = mysql.createPool({
  host: "localhost", // 서버주소(ip)
  port: "3306",
  user: "root",
  password: "mysql1234",
  database: "hrdb2019",
});

export const db_mysql2 = pool.promise();
