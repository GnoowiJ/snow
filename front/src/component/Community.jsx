import React from "react";
import "../css/community.css";
import { Link } from "react-router-dom";
import CommunityEvent from "./community/CommunityEvent.jsx";
import CommunityReview from "./community/CommunityReview.jsx";
import CommunityFaq from "./community/CommunityFaq.jsx";
import CommunityQna from "./community/CommunityQna.jsx";
import CommunityEventDetail from "./community/CommunityEventDetail.jsx";
import CommunityQnaWrite from "./community/CommunityQnaWrite.jsx";
import CommunityQnaDetail from "./community/CommunityQnaDetail.jsx";

/**
 * 커뮤니티 메인 페이지
 * @param {*} { communityId, communityDetail }
 * @returns
 */
export default function Community({ communityId, communityDetail }) {
  return (
    <>
      <div className="image-container">
        <p>
          <img
            src="https://snowfoxflowers.com/web/upload/free_design/comu_banner.jpg"
            alt="community"
          />
        </p>
      </div>
      <div>
        <ul className="community-menu">
          <li>
            <Link to="/community/event">
              {communityId === "event" ? (
                <button className="active" type="button">
                  이벤트
                </button>
              ) : (
                <button type="button">이벤트</button>
              )}
            </Link>
          </li>
          <li>
            <Link to="/community/review">
              {communityId === "review" ? (
                <button className="active" type="button">
                  리뷰
                </button>
              ) : (
                <button type="button">리뷰</button>
              )}
            </Link>
          </li>
          <li>
            <Link to="/community/faq">
              {communityId === "faq" ? (
                <button className="active" type="button">
                  자주하는질문
                </button>
              ) : (
                <button type="button">자주하는질문</button>
              )}
            </Link>
          </li>
          <li>
            <Link to="/community/qna">
              {communityId === "qna" ? (
                <button className="active" type="button">
                  1:1문의
                </button>
              ) : (
                <button type="button">1:1문의</button>
              )}
            </Link>
          </li>
        </ul>
      </div>
      <div className="community content">
        {(function () {
          if (communityId === "event") {
            if (communityDetail === "eventDetail")
              return <CommunityEventDetail />;
            else return <CommunityEvent />;
          } else if (communityId === "review") return <CommunityReview />;
          else if (communityId === "faq") return <CommunityFaq />;
          else if (communityId === "qna") {
            if (communityDetail === "qnaWrite") return <CommunityQnaWrite />;
            else if (communityDetail === "qnaDetail")
              return <CommunityQnaDetail />;
            else return <CommunityQna />;
          }
        })()}
      </div>
    </>
  );
}
