import { db_mysql2 as db } from "../db/mysql2_connection.js";
// 암호화: bcryptjs, hash 방식
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

/**
 * @desc 회원가입
 */
export const signupMember = async (memberData) => {
  let result_rows = 0;
  console.log("repository까지 옴 ==> ", memberData);
  const sql = `INSERT INTO snowfox_member(user_id, user_pass, user_name, zipcode, address, detail_address,
  line_number_first, line_number_middle, line_number_last, phone_number_first, phone_number_middle, phone_number_last,
  email_id, email_domain, birth_year, birth_month, birth_day, birth_date_type,
  marry_year, marry_month, marry_day, marry_partner_birth_year, marry_partner_birth_month, marry_partner_birth_day,
  essential_agree)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  
  // @desc 일반전화번호 값 입력여부 체크
  let lineNumberFirst = null;
  let lineNumberMiddle = null;
  let lineNumberLast = null;
  if (memberData.landlineNumber1 !== '' && memberData.landlineNumber2 !== '') {
    lineNumberFirst = memberData.landlineNumberHead;
    lineNumberMiddle = memberData.landlineNumber1;
    lineNumberLast = memberData.landlineNumber2;
  }
  // @desc 결혼기념일 입력여부 체크
  let marryYear = null;
  let marryMonth = null;
  let marryDay = null;
  if (memberData.merryYear !== '' && memberData.merryMonth !== '' && memberData.merryDay !== '') {
    marryYear = memberData.merryYear;
    marryMonth = memberData.merryMonth;
    marryDay = memberData.merryDay;
  }

  // @desc 배우자생일 입력여부 체크
  let partnerBirthYear = null;
  let partnerBirthMonth = null;
  let partnerBirthDay = null;
  if (memberData.partnerBirthYear !== '' && memberData.partnerBirthMonth !== '' && memberData.partnerBirthDay !== '') {
    partnerBirthYear = memberData.partnerBirthYear;
    partnerBirthMonth = memberData.partnerBirthMonth;
    partnerBirthDay = memberData.partnerBirthDay;
  }

  const params = [memberData.userId,
  bcrypt.hashSync(memberData.userPass, 7),
  memberData.userName,
  memberData.zipcode,
  memberData.address,
  memberData.detailAddress,
  lineNumberFirst,
  lineNumberMiddle,
  lineNumberLast,
  memberData.phoneNumberHead,
  memberData.phoneNumber1,
  memberData.phoneNumber2,
  memberData.emailId,
  memberData.emailDomain,
  memberData.birthyear,
  memberData.birthmonth,
  memberData.birthday,
  memberData.solarLunar,
  marryYear,
  marryMonth,
  marryDay,
  partnerBirthYear,
  partnerBirthMonth,
  partnerBirthDay,
  memberData.receiveInfo
  ];

  try {
    const [result] = await db.execute(sql, params);
    result_rows = result.affectedRows;
  } catch (error) {
    console.log(error);
  }

  return { cnt: result_rows };
}

/**
 * @desc 아이디 중복체크
 */
export const idCheck = async (userId) => {
  const sql = `
    SELECT COUNT(*) AS cnt FROM snowfox_member
    WHERE user_id = ?
  `;
  return db.execute(sql, [userId])
    .then((result) => result[0][0])
    .catch((error) => console.log(error));
};

/**
 * @desc 로그인 처리
 */
export const login = async (loginData) => {
  const sql = `
    SELECT COUNT(user_id) cnt, ANY_VALUE(user_pass) user_pass 
    , ANY_VALUE(user_name) user_name from snowfox_member
    where user_id = ?
  `;
  const result = {};
  let loginRst = 0;
  let loginToken = "";
  // id 비교
  try {
    const [result] = await db.execute(sql, [loginData.userId]);
    const selectRst = result[0];

    if (selectRst.cnt === 1) {
      // 암호화 password 비교: bcrypt.compareSync() 이용
      if (bcrypt.compareSync(loginData.userPass, selectRst.user_pass)) {
        loginRst = 1;
        // token
        loginToken = jwt.sign({ userId: loginData.userId, userName: selectRst.user_name }, "cmVhY3QxMjM0");
      }
    }
  } catch (error) {
    console.error("login error check ===> ", error);
  }

  result.cnt = loginRst;
  result.token = loginToken;
  return result;
};

/**
 * @desc 아이디 찾기
 */
export const findId = async (findIdData) => {
  let sql = "";
  let param = [findIdData.certification, findIdData.userName];
  if (findIdData.certification === 'findIdByEmail') {
    sql = `
    SELECT ? AS findType, user_id, user_name, 
    CONCAT(email_id, '@', email_domain) AS email, 
    CONCAT(phone_number_first, '-', phone_number_middle, '-', phone_number_last) AS phone_number 
    from snowfox_member
    where user_name = ? AND email_id = ? AND email_domain = ?
  `;
    param = [...param, findIdData.userEmail.split('@')[0], findIdData.userEmail.split('@')[1]];
  } else if (findIdData.certification === 'findIdByPhone') {
    sql = `
    SELECT ? AS findType, user_id, user_name, 
    CONCAT(email_id, '@', email_domain) AS email, 
    CONCAT(phone_number_first, '-', phone_number_middle, '-', phone_number_last) AS phone_number 
    from snowfox_member
    where user_name = ? AND phone_number_first = ?
    AND phone_number_middle = ? AND phone_number_last = ?
  `;
    param = [...param, findIdData.phoneFirst, findIdData.phoneMiddle, findIdData.phoneLast];
  }

  return db.execute(sql, param)
    .then((result) => result[0])
    .catch((error) => console.log(error));
};

/**
 * @desc 비밀번호 찾기
 */
export const findPass = async (findPassData) => {
  let sql = "";
  let param = [findPassData.certification
    , findPassData.userId
    , findPassData.userName];
  if(findPassData.certification === "findPassByEmail") {
    sql=`
      SELECT ? AS findType, user_id, user_name, 
      CONCAT(email_id, '@', email_domain) AS email, 
      CONCAT(phone_number_first, '-', phone_number_middle, '-', phone_number_last) AS phone_number 
      FROM snowfox_member
      WHERE user_id = ? 
      AND user_name = ? 
      AND email_id = ? AND email_domain = ?
    `;
    param = [...param, findPassData.email.split('@')[0], findPassData.email.split('@')[1]];
  } else if (findPassData.certification === "findPassByPhone") {
    sql=`
      SELECT ? AS findType, user_id, user_name, 
      CONCAT(email_id, '@', email_domain) AS email, 
      CONCAT(phone_number_first, '-', phone_number_middle, '-', phone_number_last) AS phone_number 
      FROM snowfox_member
      WHERE user_id = ? 
      AND user_name = ? 
      AND phone_number_first = ?
      AND phone_number_middle = ?
      AND phone_number_last = ?
    `;
    param = [...param, findPassData.phoneFirst, findPassData.phoneMiddle, findPassData.phoneLast];
  }

  return db.execute(sql, param)
  .then((result) => result[0][0])
  .catch((error) => console.log(error));
};

/**
 * @desc 회원정보 수정 - 회원정보 불러오기
 */
export const memberInfo = async (userId) => {
  const sql = `
  select * from snowfox_member
  where user_id = ?
  `;
  // [[조회결과], ~~~~~~~~]
  return db.execute(sql, [userId])
  .then((result) => result[0][0])
  .catch(error => console.log(error));
};

/**
 * @desc 회원정보수정 처리
 */
export const update = async (updateData) => {
  const sql = `
  UPDATE snowfox_member SET
    zipcode = ?,
    address = ?,
    detail_address = ?,
    line_number_first = ?,
    line_number_middle = ?,
    line_number_last = ?,
    phone_number_first = ?,
    phone_number_middle = ?,
    phone_number_last = ?,
    email_id = ?,
    email_domain = ?,
    birth_year = ?,
    birth_month = ?,
    birth_day = ?,
    birth_date_type = ?,
    marry_year = ?,
    marry_month = ?,
    marry_day = ?,
    marry_partner_birth_year = ?,
    marry_partner_birth_month = ?,
    marry_partner_birth_day = ?
  WHERE user_id = ?
  `;
  const params = [updateData.zipcode,
    updateData.address,
    updateData.detailAddress,
    (updateData.landlineNumber1 !== '' && updateData.landlineNumber2 !== '') ? updateData.landlineNumberHead : null,
    updateData.landlineNumber1 !== ''? updateData.landlineNumber1 : null,
    updateData.landlineNumber2 !== ''? updateData.landlineNumber2 : null,
    updateData.phoneNumberHead,
    updateData.phoneNumber1,
    updateData.phoneNumber2,
    updateData.emailId,
    updateData.emailDomain,
    updateData.birthyear,
    updateData.birthmonth,
    updateData.birthday,
    updateData.solarLunar,
    updateData.merryYear !== ''? updateData.merryYear : null,
    updateData.merryMonth !== ''? updateData.merryMonth : null,
    updateData.merryDay !== ''? updateData.merryDay : null,
    updateData.partnerBirthYear !== ''? updateData.partnerBirthYear : null,
    updateData.partnerBirthMonth !== ''? updateData.partnerBirthMonth : null,
    updateData.partnerBirthDay !== ''? updateData.partnerBirthDay : null,
    updateData.userId
  ];

  return db.execute(sql, params)
  .then((result)=> {
    return {cnt: result[0].affectedRows}
  })
  .catch((error)=>console.log(error));
};