import React from "react";
import { Link } from "react-router-dom";

/**
 * 커뮤니티 리뷰 상세 컴포넌트
 * @returns
 */
export default function ReviewList() {
  return (
    <div>
      <Link to="#">
        <div className="review-image">
          <img
            src="https://snowfoxflowers.com/web/product/medium/202304/4e0e6b1b45f564b3e6e38b477c0f6591.jpg"
            alt="review image"
          />
        </div>
      </Link>
      <div className="review-info">
        <div className="review-title">
          <Link to="#">
            <h3>하늘같은 은혜 카네이션 센터픽스</h3>
            <p>39,900원</p>
          </Link>
          <div className="review-rating-count">
            <p>⭐⭐⭐⭐⭐ 5.0</p>
            <p>6</p>
          </div>
        </div>
        <div className="review-detail">
          <ul>
            <Link to={"#"}>
              <li className="review-detail-list">
                <img
                  src="https://snowfoxflowers.com/web/product/medium/202304/4e0e6b1b45f564b3e6e38b477c0f6591.jpg"
                  alt="review1"
                />
                <p>만족할 만큼 좋은 상품이에요🌈 감사합니다.</p>
              </li>
            </Link>
            <Link to={"#"}>
              <li className="review-detail-list">
                <img
                  src="https://snowfoxflowers.com/web/product/medium/202304/4e0e6b1b45f564b3e6e38b477c0f6591.jpg"
                  alt="review2"
                />
                <p>잘 산 것 같아 기분이 좋아요 😃😃</p>
              </li>
            </Link>
            <Link to={"#"}>
              <li className="review-detail-list">
                <img
                  src="https://snowfoxflowers.com/web/product/medium/202304/4e0e6b1b45f564b3e6e38b477c0f6591.jpg"
                  alt="review3"
                />
                <p>만족할 만큼 좋은 상품이에요🌈 감사합니다.</p>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
