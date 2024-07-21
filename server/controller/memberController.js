import * as repository from "../repository/memberRepository.js";

/**
 * 회원가입
 * @param {*} req 
 * @param {*} res 
 */
export const signupMember = async (req, res) => {
  const memberData = req.body;
  const result = await repository.signupMember(memberData);
  res.json(result);
  res.end();
}

/**
 * 아이디 중복체크
 * @param {*} req 
 * @param {*} res 
 */
export const idCheck = async (req, res) => {
  const { userId } = req.body;
  const result = await repository.idCheck(userId);
  res.json(result);
  res.end();
}

/**
 * 로그인 처리
 * @param {*} req 
 * @param {*} res 
 */
export const login = async (req, res) => {
  const loginData = req.body;
  const result = await repository.login(loginData);
  res.json(result);
  res.end();
}

/**
 * 아이디 찾기
 * @param {*} req 
 * @param {*} res 
 */
export const findId = async (req, res) => {
  const findIdData = req.body;
  const result = await repository.findId(findIdData);
  res.json(result);
  res.end();
};

/**
 * 비밀번호 찾기
 * @param {*} req 
 * @param {*} res 
 */
export const findPass = async (req, res) => {
  const findPassData = req.body;
  const result = await repository.findPass(findPassData);
  res.json(result);
  res.end();
}

/**
 * 회원정보 수정 - 회원정보 불러오기
 */
export const memberInfo = async (req, res) => {
  const { userId } = req.body;
  const result = await repository.memberInfo(userId);
  res.json(result);
  res.end();
}

/**
 * 회원정보 수정 처리
 * @param {*} req 
 * @param {*} res 
 */
export const update = async (req, res) => {
  const updateData = req.body;
  const result = await repository.update(updateData);
  res.json(result);
  res.end();
};