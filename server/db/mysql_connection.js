// import mysql from "mysql";

/**
 * mysql을 import하여 db connect
 */
export const db_mysql = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql1234",
  database: "hrdb2019",
});

// db_mysql.connect((err) => {
//   if (err) {
//     console.error("Error connecting to the database:", err);
//     process.exit(1); // 연결 오류 시 서버 종료
//   }
//   console.log("Connected to the MySQL database.");
// });
