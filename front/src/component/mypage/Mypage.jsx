import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { HomeToCurrentMenu } from "../HomeToCurrentMenu.jsx";
import { PageMainTitle } from "../PageTitle.jsx";
import { MemberInfoNotice } from "./MemberInfoNotice.jsx";
import MypageDetailList from "./MypageDetailList.jsx";
import { getUser, removeUser } from "../../util/localStorage.ts";

export default function Mypage({refreshCartCount}) {
  const userInfo = getUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeUser();
    refreshCartCount(null);
    alert("로그아웃 되었습니다.");
    navigate("/");
  }

  return (
    <div className="content">
      <HomeToCurrentMenu menu1='마이 쇼핑' />
      <div className="mypage-logout-button-box">
        <Link to="/">
          <button type="button" 
                  className="mypage-logout-button"
                  onClick={handleLogout}>로그아웃</button>
        </Link>
      </div>
      <PageMainTitle title='마이 쇼핑' />
      <MemberInfoNotice name={userInfo.userName} grade='일반회원' />
      <table border="1" className="mypage-detail-info-box">
        <tbody>
          <tr>
            <td className="mypage-table-data">
              <div className="mypage-detail-info">
                <p className="mypage-detail-info-item">가용적립금</p>
                <p className="mypage-detail-info-value"><span>2000원</span></p>
                <button type="button" className="mypage-detail-info-button">조회</button>
              </div>
              <div className="mypage-detail-info">
                <p className="mypage-detail-info-item">사용적립금</p>
                <p className="mypage-detail-info-value">0원</p>
              </div>
              <div className="mypage-detail-info">
                <p className="mypage-detail-info-item">쿠폰</p>
                <p className="mypage-detail-info-value">0개</p>
                <button type="button" className="mypage-detail-info-button">조회</button>
              </div>
            </td>
            <td className="mypage-table-data">
              <div className="mypage-detail-info">
                <p className="mypage-detail-info-item">총적립금</p>
                <p className="mypage-detail-info-value">2000원</p>
              </div>
              <div className="mypage-detail-info">
                <p className="mypage-detail-info-item">총주문</p>
                <p className="mypage-detail-info-value">0(0회)</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <table border="1" className="mypage-order-status">
        <thead>
          <tr>
            <td className="mypage-order-status-title" colSpan={5}>
              <div className="mypage-order-status-title-box">
                <p className="mypage-current-order-status">나의 주문처리 현황</p>
                <p className="mypage-current-order-period">(최근 <span>3개월 </span>기준)</p>
              </div>
            </td>
          </tr>
        </thead>
        <tbody className="mypage-order-status-table">
          <tr>
            <td className="mypage-order-status-data">
              <p className="mypage-order-status-subtitle">입금전</p>
              <span className="mypage-order-status-value">0</span>
            </td>
            <td className="mypage-order-status-data">
              <p className="mypage-order-status-subtitle">배송준비중</p>
              <span className="mypage-order-status-value">0</span>
            </td>
            <td className="mypage-order-status-data">
              <p className="mypage-order-status-subtitle">배송중</p>
              <span className="mypage-order-status-value">0</span>
            </td>
            <td className="mypage-order-status-data">
              <p className="mypage-order-status-subtitle">배송완료</p>
              <span className="mypage-order-status-value">0</span>
            </td>
            <td className="mypage-order-status-data">
              <ul>
                <li className="mypage-order-status-opt-list">취소 : <span>0</span></li>
                <li className="mypage-order-status-opt-list">교환 : <span>0</span></li>
                <li className="mypage-order-status-opt-list">반품 : <span>0</span></li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
      <MypageDetailList />
      <div >


      </div>
    </div>
  );
}