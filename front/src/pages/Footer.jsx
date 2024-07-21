import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSquareFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer-overview">
      <div className="footer-all content">
        <div className="footer-part1">
          <Link to="/">
            <img src="https://snowfoxflowers.com/web/upload/free_design/footer_logo.png" />
          </Link>

          <div>
            <div className="footer-part1-menu">
              <p>회사소개 | 이용약관 | 개인정보처리방침 | 이용안내</p>
            </div>
            <div>
              <p>스노우폭스 브랜딩 컴퍼니</p>
              <p>대표자 : 김아영 | 사업자등록번호 : 646-81-00519</p>
              <p>주소 : 서울특별시 강남구 강남대로 342 (역삼동) 역삼빌딩 3층</p>
              <p>
                통신판매신고번호 :
                2017서울서초0104[사업자정보확인]개인정보책임자 : 김아영
              </p>
            </div>
          </div>
        </div>
        <div className="footer-part2">
          <div>
            <h3>고객센터</h3>
            <p>02-6229-4342</p>
            <p>월-금 9:00-18:00</p>
            <p>주말, 공휴일 휴무</p>
          </div>
          <div>
            <div className="footer-part2-email">
              <h3>상담/주문 이메일</h3>
              <p>snowfoxflowers@snowfoxbc.com</p>
            </div>
            <div>
              <h3>계좌정보</h3>
              <p>우리은행 1005-503-932745</p>
              <p>주)스노우폭스브랜딩컴퍼니</p>
            </div>
          </div>
          <div className="footer-sns">
            <h3>SNS</h3>
            <div>
              <div className="footer-sns-instagram">
                <Link
                  target="_blank" // 새 탭 오픈
                  to="https://www.instagram.com/snowfox_flowers/"
                >
                  <FontAwesomeIcon
                    className="footer-sns-icon"
                    icon={faInstagram}
                  />
                </Link>
              </div>
              <div className="footer-sns-youtube">
                <Link
                  target="_blank"
                  to="https://www.youtube.com/@snowfoxflowers2217"
                >
                  <FontAwesomeIcon
                    className="footer-sns-icon"
                    icon={faYoutube}
                  />
                </Link>
              </div>
              <div className="footer-sns-facebook">
                <Link
                  target="_blank"
                  to="https://www.facebook.com/snowfoxflowers"
                >
                  <FontAwesomeIcon
                    className="footer-sns-icon"
                    icon={faSquareFacebook}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
