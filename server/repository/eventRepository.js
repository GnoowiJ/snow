import { db_mysql2 as db } from "../db/mysql2_connection.js";

/**
 * 이벤트 전체 조회
 * @returns 
 */
export const getEvent = async () => {
  const sql = `
    select row_number() over(order by reg_date) as rno, 
    event_id, 
    event_title, 
    event_image, 
    LEFT(event_startdate, 10) AS event_startdate, 
    LEFT(event_enddate, 10) AS event_enddate
    from snowfox_event
    order by rno desc
    `;
  return db
    .execute(sql)
    .then((result) => result[0])
    .catch((error) => console.log(error));
};

/**
 * 이벤트 상세 조회
 * @param {*} id 
 * @returns 
 */
export const getEventDetail = async (id) => {
  const sql = `
    select event_id, event_title, event_image, author, LEFT(reg_date, 10) AS reg_date, hits from snowfox_event
    where event_id = ?
  `;

  return db
    .execute(sql, [id])
    .then((result) => result[0][0])
    .catch((error) => console.log(error));
};

/**
 * 이벤트 조회수 업데이트
 * @param {*} eventId 
 * @returns 
 */
export const updateEventHits = async (eventId) => {
  const sql = `
    UPDATE snowfox_event SET hits = hits + 1
    WHERE event_id = ?
  `;
  return db.execute(sql, [eventId])
    .then((result) => {
      return { cnt: result[0].affectedRows }
    })
    .catch((error) => console.log(error));
}