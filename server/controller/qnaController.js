import * as repository from "../repository/qnaRepository.js";

/**
 * 1:1 문의 리스트 조회
 * @param {*} req 
 * @param {*} res 
 */
export async function getQna(req, res) {
  const qnaListResult = await repository.getQna();
  const totalQnaResult = await repository.getTotalQna();
  res.json({ qnaList: qnaListResult, totalQna: totalQnaResult.qnaCnt });
  res.end();
}

/**
 * 1:1 문의 상세 조회
 * @param {*} req 
 * @param {*} res 
 */
export async function getQnaDetail(req, res) {
  const { id } = req.params;
  const result = await repository.getQnaDetail(id);
  res.json(result);
  res.end();
}

/**
 * 1:1 문의 글작성
 * @param {*} req 
 * @param {*} res 
 */
export async function writeQna(req, res) {
  const formData = req.body;
  const result = await repository.writeQna(formData);
  res.json(result);
  res.end();
}

/**
 * 1:1 문의 조회수 업데이트
 * @param {*} req 
 * @param {*} res 
 */
export async function updateBqHits(req, res) {
  const { bqid } = req.body;
  res.json(await repository.updateBqHits(bqid));
  res.end();
}

export async function getTotalQna(req, res) {
  res.json(await repository.getTotalQna());
  res.end();
}

export async function existQnaById(req, res) {
  const {userId} = req.body;
  const qnaListResult = await repository.existQnaById(userId);
  const totalQnaResult = await repository.existTotalQnaById(userId);

  res.json({ qnaList: qnaListResult, totalQna: totalQnaResult.qnaCnt });
  res.end();
}

export async function getUser(req, res) {
  const {userId} = req.body;
  res.json(await repository.getUser(userId));
  res.end();
}