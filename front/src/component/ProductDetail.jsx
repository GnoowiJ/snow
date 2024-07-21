import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/productDetail.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { getUser } from "../util/localStorage.ts";

export default function ProductDetail({ addCartCount }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0); // 총 상품 가격을 위한 상태
  const userInfo = getUser();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/api/products/${id}`)
      .then(response => {
        setProduct(response.data);
        setTotalPrice(response.data.discounted_price); // 초기 총 가격 설정
      })
      .catch(error => {
        console.error("상품 정보를 가져오는 중 오류가 발생했습니다!", error);
      });
  }, [id]);

  const handleQuantityChange = (value) => {
    const newQuantity = Math.max(1, value);
    setQuantity(newQuantity);
    setTotalPrice(newQuantity * product.discounted_price); // 총 가격 업데이트
  };

  const handleBuyClick = () => {
    console.log(`${product.name}을(를) ${quantity}개 구매합니다.`);
  };

  const handleboxClick = () => {
    if (!userInfo) {
      alert("로그인 후, 상품을 담을 수 있습니다.");
      navigate("/login");
      return false;
    }
    // 선택된 수량으로 상품을 선물하는 로직
    // console.log(`${product.name}을(를) ${quantity}개 장바구니에 담습니다.`);
    axios({
      method: "post",
      url: "http://127.0.0.1:3001/cart/addcart",
      data: {
        pid: id,
        qty: quantity,
        userId: userInfo.userId
      }
    })
      .then((result) => {
        let qty = 0;
        if (result.data.cnt === 1) {
          alert("장바구니에 상품이 추가되었습니다.");
          qty = result.data.qty;
        };
        addCartCount(qty);
      })
  };

  const formatNumber = (number) => {
    return new Intl.NumberFormat('ko-KR').format(number);
  };

  if (!product) {
    return <div>로딩 중...</div>;
  }

  return (
    <div>
      <div className="product-detail">
        <div className="product-info">
          <div className="info-left">
            <img className="product-img" src={product.image_url} alt={product.name} />
          </div>

          <div className="info-right">
            <div className="info-icon">
              <Link to={"/"}><FontAwesomeIcon icon={faHouse} /></Link>
              <FontAwesomeIcon icon={faAngleRight} className="right-icon" />{product.type}
              <FontAwesomeIcon icon={faAngleRight} className="right-icon" />{product.category}
            </div>
            <h1 className="product-name">{product.name}</h1>
            <div className="product-price">
              <p className="sale-per">{product.sale ? `${product.sale}%` : null}</p>
              <p className="sale-price">{formatNumber(product.discounted_price)}원</p>
              <p className="detailprice">{formatNumber(product.price)}원</p>
            </div>
            <div className="quantity-selector">
              <h3>수량</h3>
              <div>
              <button onClick={() => handleQuantityChange(quantity - 1)}>-</button>
              <button>{quantity}</button>
              <button onClick={() => handleQuantityChange(quantity + 1)}>+</button>
              </div>
            </div>
            <div className="total-price">
              <div className="total-price-container">총 상품금액: <span className="total-price-font">{formatNumber(totalPrice)}</span>원</div>
            </div>
            <div className="action-buttons">
              <button onClick={handleBuyClick}>구매하기</button>
              <button onClick={handleboxClick}>장바구니</button>
            </div>
          </div>
        </div>
        <div className="product-info-image">
          <img src="https://cafe24.poxo.com/ec01/snowfoxbc/3JPAsJn/jGkesyYvH/tEaeHWMOIYEHOjEEboSw1schaAReZPSQZPTKUdwMjH2vEFSc7kGVoMs5kne03HRIhz9A==/_/web/upload/NNEditor/20240412/copy-1712897103-about20us.jpg" alt="imgstart" />
        </div>
        <div>
          <img src={product.detail_images} alt="detail6" />
        </div>
        <div>
          <img src="https://cafe24.poxo.com/ec01/snowfoxbc/3JPAsJn/jGkesyYvH/tEaeHWMOIYEHOjEEboSw1schaAReZPSQZPTKUdwMjH2vEFSc7kGVoMs5kne03HRIhz9A==/_/web/upload/NNEditor/20231216/copy-1702710302-KakaoTalk_20231215_150112393.jpg" alt="detail1" />
        </div>
        <div>
          <img src="https://cafe24.poxo.com/ec01/snowfoxbc/3JPAsJn/jGkesyYvH/tEaeHWMOIYEHOjEEboSw1schaAReZPSQZPTKUdwMjH2vEFSc7kGVoMs5kne03HRIhz9A==/_/web/upload/NNEditor/20231216/copy-1702710307-flower20condition.jpg" alt="detail2" />
        </div>
        <div>
          <img src="https://cafe24.poxo.com/ec01/snowfoxbc/3JPAsJn/jGkesyYvH/tEaeHWMOIYEHOjEEboSw1schaAReZPSQZPTKUdwMjH2vEFSc7kGVoMs5kne03HRIhz9A==/_/web/upload/NNEditor/20240320/copy-1710899515-EBB0B0EC86A1EBB0A9EBB29520EC9588EB82B4_2024.jpg" alt="detail3" />
        </div>
        <div>
          <img src="https://cafe24.poxo.com/ec01/snowfoxbc/3JPAsJn/jGkesyYvH/tEaeHWMOIYEHOjEEboSw1schaAReZPSQZPTKUdwMjH2vEFSc7kGVoMs5kne03HRIhz9A==/_/web/upload/NNEditor/20230607/copy-1686122922-notice.jpg" alt="detail4" />
        </div>
        <div>
          <img src="https://cafe24.poxo.com/ec01/snowfoxbc/3JPAsJn/jGkesyYvH/tEaeHWMOIYEHOjEEboSw1schaAReZPSQZPTKUdwMjH2vEFSc7kGVoMs5kne03HRIhz9A==/_/web/upload/NNEditor/20230607/copy-1686122922-info.jpg" alt="detail5" />
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
