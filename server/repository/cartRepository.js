import { db_mysql2 as db } from "../db/mysql2_connection.js";

/* 
    장바구니 상품 추가 (동일 상품 있을 시 수량만 추가)
*/
export const addcart = async (CartData) => {
    const checkResult = await cartCheck(CartData.pid, CartData.userId);
    let sql = "";
    let params = null;
    let result_rows = 0;

    if (checkResult === undefined) {
        sql = `
            INSERT INTO snowfox_cart(user_id, pid, qty, cdate)
            VALUES (?, ?, ?, NOW());
        `;
        params = [CartData.userId, CartData.pid, CartData.qty];
    } else {
        sql = `
            UPDATE snowfox_cart
            SET qty = qty + ?
            WHERE cid = ? AND user_id = ?
        `;
        params = [CartData.qty, checkResult.cid, CartData.userId]
    }

    try {
        const [ result ] = await db.execute(sql, params)
        result_rows = result.affectedRows;
    } catch (error) {
       console.log(error); 
    }

    return {cnt: result_rows, qty: CartData.qty}
}

/* 
    장바구니 수량 가져오기
*/
export const cartCount = async (userId) => {
    const sql = `
    SELECT IFNULL(SUM(qty), 0) AS count FROM snowfox_cart
    WHERE user_id = ?
    `;
  
    return db
      .execute(sql, [userId])
      .then((result) => result[0][0])
      .catch((error) => console.log(error));
}

/* 장바구니 상품 체크 */
async function cartCheck(pid, userId) {
    const sql = `
        SELECT cid, COUNT(cid) AS cnt FROM snowfox_cart
        WHERE pid = ? AND user_id = ?
        GROUP BY cid
    `;
  
    return db
      .execute(sql, [pid, userId])
      .then((result) => result[0][0])
      .catch((error) => console.log(error));
}

/**
 * 장바구니 리스트 가져오기
 */
export const cartList = async (userId) => {
    const sql = `
        SELECT SC.cid, SP.image_url, SP.name, SC.qty, SP.discounted_price
        FROM snowfox_cart SC
        INNER JOIN products SP ON SC.pid = SP.id
        WHERE SC.user_id = ?
        ORDER BY SC.cdate DESC
    `;
    let cartList = null;
    let cntResult = null;
    try {
        const [result] = await db.execute(sql, [userId]);
        const cnt = await getCartCnt(userId);
        cartList = result;
        cntResult = cnt;
    } catch (error) {
        console.log(error);
    }
    return {list: cartList, cnt: cntResult};
};

async function getCartCnt(userId) {
    const sql = `
        SELECT COUNT(*) AS cnt FROM snowfox_cart
        WHERE user_id = ?
    `;

    return db.execute(sql, [userId])
    .then((result)=>result[0][0])
    .catch((error)=>console.log(error));
}

export const deleteCartSelected = async (cidList) => {
    const sql = `
        DELETE FROM snowfox_cart
        WHERE cid = ?
    `;
    let result_rows = 0;

    for (let i = 0; i < cidList.length; i++) {
       const [result] = await db.execute(sql, [cidList[i]]);
       result_rows += result.affectedRows;
    }
    console.log(result_rows);

    return {cnt: result_rows};
}

export const deleteCartOne = async (cid) => {
    const sql = `
        DELETE FROM snowfox_cart
        WHERE cid = ?
    `;
    let result_rows = 0;
    try {
        const [result] = await db.execute(sql, [cid]);
        result_rows = result.affectedRows;
    } catch (error) {
        console.log(error);
    }
    return {cnt: result_rows};
};