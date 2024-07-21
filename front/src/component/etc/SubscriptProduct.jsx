import React, { useState, useEffect } from "react";
import "../../css/productDetail.css";
import { Link, useLocation } from "react-router-dom";



export default function SubscriptProduct() {
  const {state} = useLocation();
  console.log('locate', state);

  return (
    <div>
      <div className="product-detail">
        <div className="product-info">
          <div className="info-left">
            <img className="product-img" src="https://snowfoxflowers.com/web/product/big/202312/b5da463cd47c0b4cc3dbbcc3c28f71c9.jpg" alt="" />
            {/* 추가 상품 정보 */}
          </div>

          <div className="info-right">
            <div className="info-icon"></div>
            <h1 className="product-name">{state.title}</h1>
            <div className="product-price">
                      <p className="sale-per">{state.price}</p>
                      <p className="sale-price">{state.price}</p>
                      <p className="detailprice"></p>
                    </div>
            <div className="quantity-selector">
              <h3>수량</h3>
              <button className="counter">-</button>
              <button>1</button>
              <button className="counter">+</button>
            </div>
            <div className="action-buttons">
              <button>정기배송 신청하기</button>
            </div>

          </div>
        </div>
        <div className="product-info-image">
          <img src="https://snowfoxflowers.com/web/upload/NNEditor/20240131/copy-1706664223-ECA095EAB8B0EAB5ACEB8F8520EC8381EC84B8ED8E98EC9DB4ECA780_2ECB0A8EC8898ECA095.jpg" alt="imgstart" />
        </div>
        <div>
          <img src="https://snowfoxflowers.com/web/upload/NNEditor/20231219/02_flower_s_size201.jpg" alt="detail1" />
        </div>
        <div>
          <img src="https://snowfoxflowers.com/web/upload/NNEditor/20231219/03_subscripion20notice.jpg" alt="detail2" />
        </div>
        <div>
          <img src="https://snowfoxflowers.com/web/upload/NNEditor/20231219/04_flower20condition.jpg" alt="detail3" />
        </div>
        <div>
          <img src="https://snowfoxflowers.com/web/upload/NNEditor/20231219/05_flower20size.jpg" alt="detail4" />
        </div>
        <div>
          <img src="https://snowfoxflowers.com/web/upload/NNEditor/20240418/copy-1713429468-6.jpg" alt="detail5" />
        </div>
        <div>
          <img src="https://snowfoxflowers.com/web/upload/NNEditor/20240418/copy-1713429476-7.jpg" alt="detail6" />
        </div>
        <div>
          <img src="https://cafe24.poxo.com/ec01/snowfoxbc/3JPAsJn/jGkesyYvH/tEaeHWMOIYEHOjEEboSw1schaAReZPSQZPTKUdwMjH2vEFSc7kGVoMs5kne03HRIhz9A==/_/web/upload/NNEditor/20230607/copy-1686122922-info.jpg" alt="detail7" />
        </div>
        
      </div>
      <div>
        <h3 className="buy-info">구매 안내</h3>
        <div className="purchase-guide">
          <div className="content">
            <h3 className="left">상품결제정보</h3>
            <div className="right">
              고액결제의 경우 안전을 위해 카드사에서 확인전화를 드릴 수도 있습니다.
              확인과정에서 도난 카드의 사용이나 타인 명의의 주문등 정상적인 주문이 아니라고 판단될 경우 임의로 주문을 보류 또는 취소할 수 있습니다.
              <br />
              <br />
              무통장 입금은 상품 구매 대금은 PC뱅킹, 인터넷뱅킹, 텔레뱅킹 혹은 가까운 은행에서 직접 입금하시면 됩니다.
              <br />
              주문시 입력한 입금자명과 실제입금자의 성명이 반드시 일치하여야 하며, 7일 이내로 입금을 하셔야 하며 입금되지 않은 주문은 자동취소 됩니다.
            </div>
          </div>
          <div className="content">
            <h3 className="left">배송정보</h3>
            <div className="right">
              배송 방법 : 고객직접선택 <br />
              배송 지역 : 전국  <br />
              배송 비용 : 고객직접선택  <br />
              배송 기간 : 1일 ~ 2일 <br />
              배송 안내 : - 산간벽지나 도서지방은 별도의 추가금액을 지불하셔야 하는 경우가 있습니다.  <br />
              고객님께서 주문하신 상품은 입금 확인후 배송해 드립니다. 다만, 상품종류에 따라서 상품의 배송이 다소 지연될 수 있습니다.
            </div>
          </div>
          <div className="content">
            <h3 className="left">교환 및 반품정보</h3>
            <div className="right">
              - 생화 특성상 교환 및 반품이 어려운점 양해부탁드립니다. <br />
              저희 상품에 문제가 있는 경우 사진을 찍어 전화 혹은 이메일을 주시면 다시 보내드리거나 신속히 처리하도록 노력하겠습니다
              <br /><br /><br />
              단, 생화가 아닌 일반 상품에 문제가 있는 경우 7일이내 교환 및 환불이 가능합니다. (단순 변심시 배송비는 고객님 부담입니다,)
              <br /><br /><br />
              감사합니다.
            </div>
          </div>
          {/* 더 자세한 정보를 여기에 추가할 수 있습니다 */}
        </div>
      </div>
    </div>
  );
}





