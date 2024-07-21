import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

/**
 * 커뮤니티 이벤트 상세페이지
 * @returns
 */
export default function CommunityEventDetail() {
  const { id } = useParams();
  const [getEvent, setGetEvent] = useState({});

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3001/event/${id}`)
      .then((result) => setGetEvent(result.data))
      .catch((error) => console.log(error));
  }, [id]);

  const event = getEvent ? getEvent : {};

  return (
    <div className="content">
      <table className="community-board-detail">
        <tbody>
          <tr>
            <th className="community-board-column">제목</th>
            <td colSpan={3} className="community-board-value">
              {event.event_title}
            </td>
          </tr>
          <tr>
            <th className="community-board-column">작성자</th>
            <td colSpan={3} className="community-board-value">
              {event.author}
            </td>
          </tr>
          <tr>
            <th className="community-board-column">작성일</th>
            <td className="community-board-value-split">{event.reg_date}</td>
            <th className="community-board-column">조회수</th>
            <td className="community-board-value-split">{event.hits}</td>
          </tr>
          <td colSpan={4}>
            <img src={event.event_image} />
            <p>{event.event_title}</p>
          </td>
        </tbody>
      </table>
      <div className="community-board-button">
        <Link to="/community/event">
          <button type="button">목록</button>
        </Link>
      </div>
    </div>
  );
}
