import React from "react";
import ReviewList from "../ReviewList.jsx";
import { Link } from "react-router-dom";

/**
 * 커뮤니티 리뷰 페이지
 * @returns
 */
export default function CommunityReview() {
  return (
    <>
      <div className="community-review-order">
        <select name="" id="">
          <option value="">리뷰 많은순</option>
          <option value="">최신 상품순</option>
          <option value="">평점순</option>
        </select>
      </div>
      <div className="community-review-list">
        <ReviewList />
        <ReviewList />
        <ReviewList />
        <ReviewList />
      </div>
      <div className="community-review-list">
        <ReviewList />
        <ReviewList />
        <ReviewList />
        <ReviewList />
      </div>
      <div className="community-review-list">
        <ReviewList />
        <ReviewList />
        <ReviewList />
        <ReviewList />
      </div>
      <div className="community-review-button">
        <Link to={"/community/review"}>
          <button type="button" className="community-review-button-policy">
            운영 정책
          </button>
        </Link>
        <Link to={"/community/review"}>
          <button type="button" className="community-review-button-write">
            리뷰 작성하기
          </button>
        </Link>
      </div>
    </>
  );
}
