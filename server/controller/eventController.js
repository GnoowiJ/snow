import * as repository from "../repository/eventRepository.js";

/**
 * 이벤트 리스트 조회
 * @param {*} req 
 * @param {*} res 
 */
export const getEvent = async (req, res) => {
  const result = await repository.getEvent();
  res.json(result);
  res.end();
};

/**
 * 이벤트 상세 조회
 * @param {*} req 
 * @param {*} res 
 */
export const getEventDetail = async (req, res) => {
  const { id } = req.params;
  const result = await repository.getEventDetail(id);
  res.json(result);
  res.end();
};

/**
 * 이벤트 조회수 업데이트
 * @param {*} req 
 * @param {*} res 
 */
export const updateEventHits = async (req, res) => {
  const { eventId } = req.body;
  res.json(await repository.updateEventHits(eventId));
  res.end();
};
