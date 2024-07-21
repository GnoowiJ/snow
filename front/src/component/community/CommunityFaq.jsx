import React, { useState } from "react";

/**
 * 커뮤니티 자주하는질문 페이지
 * @returns
 */
export default function CommunityFaq() {
  const [isHideShow, setIsHideShow] = useState({ orderPay: false, delivery: false, returnRefund: false });
  /**
   * 자주 하는 질문 펼치기, 접기
   * @param {*} list
   */
  function handleWrap(list) {
    switch (list) {
      case "orderPay":
        setIsHideShow({ orderPay: !isHideShow.orderPay, delivery: false, returnRefund: false });
        break;
      case "delivery":
        setIsHideShow({ orderPay: false, delivery: !isHideShow.delivery, returnRefund: false });
        break;
      case "returnRefund":
        setIsHideShow({ orderPay: false, delivery: false, returnRefund: !isHideShow.returnRefund });
        break;
    }
  }
  return (
    <>
      <h2>자주하는질문</h2>
      <ul className="community-faq">
        <li className="community-faq-first">
          <div className="faq-flex" onClick={() => handleWrap("orderPay")}>
            <p>주문/결제</p>
            {!isHideShow.orderPay ? <p className="wrap-plus-sign">+</p> : <p className="wrap-minus-sign">-</p>}
          </div>
          {isHideShow.orderPay && (
            <div className="community-faq-content">
              <h4>- 당일 퀵 배송</h4>
              <p>서울 전 지역 / 경기 일부 지역</p>
              <p>평일 10시 - 17시 주문 시 3 - 4시간 이내 배송 가능</p>
              <p>
                서울 외 지역은 추가 배송비가 발생하며, 경기 이외의 지방지역은
                택배 배송 / 새벽 배송만 가능합니다
              </p>
              <p>
                구리 과천 광명 성남 안양 하남 외 경기 지역은 고객센터로 연락
                주시면 안내 도와드리겠습니다
              </p>
              <h4>- 새벽 배송</h4>
              <p>서울 전 지역 / 경기 일부 지역</p>
              <p>
                ※ 금요일 14시 이후 주문 시, 주말 택배사 휴무로 월요일 발송하여
                화요일 오전 8시 이전까지 도착합니다
              </p>
              <p>결제 창에서 공동현관 비밀번호를 반드시 기재해 주세요</p>
              <p>
                미 기재 시 공동현관 앞에 배송될 수 있으며 분실 위험이 있습니다
              </p>
              <h4>- 택배 배송</h4>
              <p>전국 배송</p>
              <p>평일 14시 전 주문 시 익일 도착 예정</p>
              <p>
                ※ 금요일 14시 이후 주문 시, 주말에 택배사 휴무로 월요일 발송하여
                화요일 도착합니다
              </p>
              <p>
                배송기간은 택배사 사정 및 외부 요인에 따라 변경될 수 있습니다
              </p>
              <p>
                상품 특성상 제주 및 도서 산간 지역은 배송이 제한되거나
                추가요금이 발생될 수 있습니다
              </p>
              <h4>- 매장 픽업</h4>
              <p>선택하신 희망 날짜/시간대에 해당 매장에서 직접 픽업 가능</p>
            </div>
          )}
        </li>
        <li>
          <div className="faq-flex" onClick={() => handleWrap("delivery")}>
            <p>배송</p>
            {!isHideShow.delivery ? <p className="wrap-plus-sign">+</p> : <p className="wrap-minus-sign">-</p>}
          </div>
          {isHideShow.delivery && (
            <div className="community-faq-content">
              <h4>Q1. 주문하면 언제 받아 볼 수 있나요?</h4>
              <p>
                월~금요일 오후 2시 이전 주문 건에 대해 당일 발송, 익일 배송을
                원칙으로 하고 있습니다.
              </p>
              <p>
                (*오후 2시 이후의 주문 건은 다음날 발송 도와드리고 있으며,
                주말은 택배사 휴무로 금요일 오후 2시 이후의 주문 건은 월요일
                발송, 화요일 배송됩니다.)
              </p>
              <p>
                당일에 받아보고 싶으시다면 구매 시, '퀵배송'을 선택해 주세요.
              </p>
              <p>
                퀵배송은 오후 5시 이전 결제 건에 한해 가능하며, 서울과
                경기권(일부 지역)만 가능합니다.
              </p>
              <h4>Q2. 택배로 받을 때, 받는 시간을 지정할 수 있나요?</h4>
              <p>
                일반 택배의 경우: 택배 배송 특성상 정확한 배송 시간 안내와 배송
                시간 조정이 어렵습니다.
              </p>
              <p>보통의 택배와 동일하게 받는 시간을 지정할 수는 없습니다.</p>
              <p>
                우체국, CJ 택배를 이용하고 있으며 해당 택배사의 사정에 따라
                도착하게 됩니다.
              </p>
              <p>새벽배송의 경우: 익일 오전 8시 이전에 받아보실 수 있습니다</p>
              <h4>Q3. 홈페이지에서 보이는 그대로 발송이 되나요?</h4>
              <p>네 맞습니다.</p>
              <p>
                다만 시장 상황에 따라 일부 꽃 구성은 변경될 수 있으나 전체적인
                느낌은 유지하여 디자인됩니다.
              </p>
              <h4>Q4. 도서산간 지역에도 배송이 되나요?</h4>
              <p>
                도서산간 지역도 배송이 가능하지만 다른 지역에 비해 배송에 1-2일
                더 소요될 수 있습니다.
              </p>
            </div>
          )}
        </li>
        <li>
          <div className="faq-flex" onClick={() => handleWrap("returnRefund")}>
            <p>반품 및 환불</p>
            {!isHideShow.returnRefund ? <p className="wrap-plus-sign">+</p> : <p className="wrap-minus-sign">-</p>}
          </div>
          {isHideShow.returnRefund && (
            <div className="community-faq-content">
              <p>
                생화 특성상 단순 변심에 의한 교환 및 환불은 불가한 점 양해
                부탁드립니다
              </p>
              <p>
                배송 중 상품이 상했을 경우 혹은 문의사항 있으시면 고객센터나
                카카오톡 플러스친구로 연락 주세요
              </p>
            </div>
          )}
        </li>
      </ul>
    </>
  );
}
