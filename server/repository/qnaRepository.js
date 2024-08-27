import { db_mysql2 as db } from "../db/mysql2_connection.js";

/**
 * @desc 1:1 문의 리스트 조회
 */
export const getQna = async () => {
  const sql = `
	SELECT ROW_NUMBER() OVER (order by bqdate) AS rno, bqid, bqtitle, 
    LEFT(bqdate, 10) AS bqdate, bqhits, 
    (SELECT user_name FROM snowfox_member WHERE user_id = SQ.user_id) user_name
      FROM snowfox_board_qna SQ
      ORDER BY rno DESC
  `;

  return db.execute(sql)
    .then((result) => result[0])
    .catch((error) => console.log(error));
};

/**
 * @desc 1:1 문의 상세 조회
 */
export const getQnaDetail = async (id) => {
  const sql = `
    SELECT bqid, bqtitle, bqclaim, CONCAT(LEFT(bqdate, 10), ' ', RIGHT(bqdate, 8)) AS bqdate, bqhits, 
    (SELECT user_name FROM snowfox_member WHERE user_id = SQ.user_id) user_name
    FROM snowfox_board_qna SQ
    WHERE bqid = ?
  `;

  return db.execute(sql, [id])
    .then((result) => result[0][0])
    .catch((error) => console.log(error));
};

/**
 * @desc 1:1 문의 글작성
 */
export const writeQna = async (formData) => {
  const sql = `
    INSERT INTO snowfox_board_qna(bqtitle, bqclaim, bqdate, user_id, privacy)
    VALUES (?, ?, NOW(), ?, ?)
  `;
  const params = [
    formData.title, formData.userClaim, formData.userId, (formData.qnaPrivacy === "privacy" ? true : false)
  ];

  return db.execute(sql, params)
    .then((result) => {
      return { cnt: result[0].affectedRows };
    })
    .catch((error) => console.log(error));
};

/**
 * @desc 1:1 문의 조회수 업데이트
 */
export const updateBqHits = async (bqid) => {
  const sql = `
    UPDATE snowfox_board_qna SET bqhits = bqhits + 1
    WHERE bqid = ?
  `;
  return db.execute(sql, [bqid])
    .then((result) => {
      return { cnt: result[0].affectedRows }
    })
    .catch((error) => console.log(error));
}

/** 
 * @desc QNA 총 리스트 
 */
export const getTotalQna = async () => {
  const sql = `
    SELECT COUNT(*) as qnaCnt
    FROM snowfox_board_qna
  `;

  return db.execute(sql)
    .then((result) => result[0][0])
    .catch((error) => console.log(error));
}

/**
 * @desc QNA의 아이디 
 * */
export const existQnaById = async (userId) => {
  const sql = `
      SELECT A.*, B.user_name FROM
    	(SELECT ROW_NUMBER() OVER (order by bqdate) AS rno, 
      bqid, bqtitle, LEFT(bqdate, 10) AS bqdate, bqhits, user_id
      FROM snowfox_board_qna
      WHERE user_id = ?) A
      INNER JOIN snowfox_member B ON A.user_id = B.user_id
      ORDER BY A.rno DESC
  `;

  return db.execute(sql, [userId])
  .then((result)=>result[0])
  .catch((error)=>console.log(error));
};

export const existTotalQnaById = async (userId) => {
  const sql = `
    SELECT COUNT(*) as qnaCnt
    FROM snowfox_board_qna
    WHERE user_id = ?
  `;

  return db.execute(sql, [userId])
    .then((result) => result[0][0])
    .catch((error) => console.log(error));
}

/**
 * @desc 로그인된 사용자 정보 
 * */
export const getUser = async (userId) => {
  const sql = `
    SELECT email_id, email_domain,
    phone_number_first, phone_number_middle, phone_number_last
    FROM snowfox_member
    WHERE user_id = ?
  `;

  return db.execute(sql, [userId])
  .then((result) => result[0][0])
  .catch((error) => console.log(error));
};