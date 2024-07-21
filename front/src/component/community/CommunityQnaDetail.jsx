import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

/**
 * 커뮤니티 1:1 문의 상세페이지
 * @returns
 */
export default function CommunityQnaDetail() {
  const { id } = useParams();
  const [getQnaDetail, setGetQnaDetail] = useState({});
  useEffect(() => {
    axios.get(`http://127.0.0.1:3001/qna/${id}`)
      .then((result) => setGetQnaDetail(result.data))
      .catch((error) => console.log(error));
  }, [id]);

  const qnaDetail = getQnaDetail ? getQnaDetail : {};

  return (
    <div className="content">
      <table className="community-board-detail">
        <tbody>
          <tr>
            <th className="community-board-column">제목</th>
            <td colSpan={3} className="community-board-value">
              {qnaDetail.bqtitle}
            </td>
          </tr>
          <tr>
            <th className="community-board-column">작성자</th>
            <td colSpan={3} className="community-board-value">
              {qnaDetail.user_name}
            </td>
          </tr>
          <tr>
            <th className="community-board-column">작성일</th>
            <td className="community-board-value-split">{qnaDetail.bqdate}</td>
            <th className="community-board-column">조회수</th>
            <td className="community-board-value-split">{qnaDetail.bqhits}</td>
          </tr>
          <td colSpan={4}>
            {qnaDetail.bqclaim !== undefined && qnaDetail.bqclaim.split('\n').map((line) => (
              <>
                {line}<br />
              </>
            ))}
          </td>
        </tbody>
      </table>
      <div className="community-board-button">
        <Link to="/community/qna">
          <button type="button">목록</button>
        </Link>
      </div>
    </div>
  );
}
