import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

/**
 * 커뮤니티 이벤트 페이지
 * @returns
 */
export default function CommunityEvent() {
  const [getEventList, setGetEventList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:3001/event")
      .then((rst) => setGetEventList(rst.data))
      .catch((error) => console.log(error));
  }, []);

  const eventList = getEventList ? getEventList : [];

  /**
   * 이벤트 조회수 업데이트 후, 상세페이지 로드
   * @param {*} eventId 
   */
  const updateEventHits = (eventId) => {
    axios({
      method: "post",
      url: "http://127.0.0.1:3001/event/updateHits",
      data: { eventId: eventId }
    }).then((result) => navigate(`/community/event/${eventId}`))
      .catch((error) => console.log(error));
  }

  return (
    <div className="community-event">
      {eventList.map((eventOne, index) => (
        <div onClick={() => updateEventHits(eventOne.event_id)} key={index}>
          <img src={eventOne.event_image} />
          <h2>{eventOne.event_title}</h2>
          <p>
            {eventOne.event_startdate} ~ {eventOne.event_enddate}
          </p>
        </div>
      ))}
    </div>
  );
}
