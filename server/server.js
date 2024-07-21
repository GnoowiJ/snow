import express from "express";
import cors from "cors";
import { db_mysql2 as db } from "./db/mysql2_connection.js"; // mysql2 연결 객체 import
import eventRouter from "./router/eventRouter.js";
import qnaRouter from "./router/qnaRouter.js";
import memberRouter from "./router/memberRouter.js";
import cartRouter from "./router/cartRouter.js";

const app = express();
const port = 3001;

// Body-parser 대신 express.json() 사용
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// MySQL2 연결 테스트
db.getConnection((err, connection) => {
  if (err) {
    console.error("DB connection error:", err);
    return;
  }
  console.log("MySQL connected");

  // 연결이 성공적으로 이루어지면 연결을 해제합니다.
  connection.release();
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// 상품 리스트 조회(페이징 포함 및 정렬)
app.get("/api/products", async (req, res) => {
  const category = req.query.category;
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 12;
  const offset = (page - 1) * limit;
  let sortOption = req.query.sort || "default"; // 기본 정렬 옵션

  let query;
  if (sortOption === "newest") {
    query = `SELECT SQL_CALC_FOUND_ROWS * FROM products WHERE category = ? ORDER BY registered_date DESC LIMIT ? OFFSET ?`;
  } else if (sortOption === "low_price") {
    query = `SELECT SQL_CALC_FOUND_ROWS * FROM products WHERE category = ? ORDER BY price ASC LIMIT ? OFFSET ?`;
  } else if (sortOption === "high_price") {
    query = `SELECT SQL_CALC_FOUND_ROWS * FROM products WHERE category = ? ORDER BY price DESC LIMIT ? OFFSET ?`;
  } else {
    query = `SELECT SQL_CALC_FOUND_ROWS * FROM products WHERE category = ? LIMIT ? OFFSET ?`;
  }

  const countQuery = "SELECT FOUND_ROWS() as total";

  try {
    const [products, fields] = await db.query(query, [category, limit, offset]);
    const [countResults, fieldsCount] = await db.query(countQuery);
    const total = countResults[0].total;
    res.json({ products, total });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).send("Server error");
  }
});

// 상품 상세 조회
app.get("/api/products/:id", async (req, res) => {
  const productId = req.params.id;
  const query = `SELECT * FROM products WHERE id = ?`;

  try {
    const [product, fields] = await db.query(query, [productId]);
    res.json(product[0]);
  } catch (error) {
    console.error("Error fetching product details:", error);
    res.status(500).send("Server error");
  }
});

// 라우터 연결
app.use("/event", eventRouter);
app.use("/qna", qnaRouter);
app.use("/member", memberRouter);
app.use("/cart", cartRouter);
