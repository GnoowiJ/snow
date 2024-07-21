import React, { useEffect, useState } from "react";
import { HomeToCurrentMenu } from "./HomeToCurrentMenu";
import { MemberInfoNotice } from "./mypage/MemberInfoNotice";
import '../css/mycart.css';
import axios from "axios";
import { getUser } from "../util/localStorage.ts";
import { useNavigate } from "react-router-dom";


export default function MyCart({ addCartCount }) {
  const userInfo = getUser();
  const [cartList, setCartList] = useState([]);
  const [cnt, setCnt] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    axios({
      method: "post",
      url: "http://127.0.0.1:3001/cart/cartList",
      data: {
        userId: userInfo.userId
      }
    }).then((result) => {
      console.log("조회결과===>", result.data);
      setCartList(result.data.list.map((cart) => ({ ...cart, checked: false })));
      setCnt(result.data.cnt.cnt);
    })
      .catch((error) => console.log(error));
  }, [])

  console.log(cartList);
  const formatNumber = (number) => {
    return new Intl.NumberFormat('ko-KR').format(number);
  };

  const getTotalPrice = () => {
    let total = 0;
    cartList.map((item) => {
      total += item.qty * item.discounted_price;
    });
    return total;
  };

  const handleAllCheck = (checkedFlag) => {
    setCartList(cartList.map((cart) => ({ ...cart, checked: checkedFlag })))
  }

  const checkCart = (cid) => {
    setCartList(cartList.map((cart) => cart.cid === cid ? { ...cart, checked: !cart.checked } : cart))
  };

  const handleDeleteChecked = () => {
    // 삭제할 장바구니 추출하기
    const deleteCartList = cartList.filter((cart) => cart.checked);
    // qty 추출하기
    let qty = 0;
    deleteCartList.map((cart) => {
      qty += cart.qty;
    })
    // cid list 추출하기
    const cidList = deleteCartList.map((cart) => cart.cid);
    // 서버 연동
    axios({
      method: "post",
      url: "http://127.0.0.1:3001/cart/deleteCartSelected",
      data: cidList
    }).then((result) => {
      if (result.data.cnt >= 1) {
        alert("선택한 상품의 삭제가 완료되었습니다.");
        const minusQty = (-1) * qty;
        addCartCount(minusQty);
        axios({
          method: "post",
          url: "http://127.0.0.1:3001/cart/cartList",
          data: {
            userId: userInfo.userId
          }
        }).then((result) => {
          console.log("조회결과===>", result.data);
          setCartList(result.data.list.map((cart) => ({ ...cart, checked: false })));
          setCnt(result.data.cnt.cnt);
        })
          .catch((error) => console.log(error));
      }
    }).catch((error) => console.log(error));

  }

  const deleteCart = (cid, qty) => {
    console.log(cid);
    axios({
      method: "post",
      url: "http://127.0.0.1:3001/cart/deleteCartOne",
      data: { cid: cid }
    }).then((result) => {
      if (result.data.cnt === 1) {
        alert("상품이 삭제되었습니다.");
        const minusQty = (-1) * qty;
        addCartCount(minusQty);
        axios({
          method: "post",
          url: "http://127.0.0.1:3001/cart/cartList",
          data: {
            userId: userInfo.userId
          }
        }).then((result) => {
          console.log("조회결과===>", result.data);
          setCartList(result.data.list.map((cart) => ({ ...cart, checked: false })));
          setCnt(result.data.cnt.cnt);
        })
          .catch((error) => console.log(error));

      }
    }).catch((error) => console.log(error))
  };

  return (
    <>
      <HomeToCurrentMenu menu1={'장바구니'} />
      <h1 className="cart-title">장바구니</h1>
      <MemberInfoNotice name={userInfo.userName} grade={'일반회원'} />

      <div className="cart-allcontain">
        <div className="cart-list-head">
          <p className="cart-list-head-left">국내배송상품 ({cnt})</p>
          <div className="cart-list-head-right">
            <p>장바구니에 담긴 상품은 30일 동안 보관됩니다.</p>
          </div>
        </div>
        <div className="cart-list">
          <table className="cart-list-table" border="1">
            <tbody>
              <tr>
                <th>
                  <input type="checkbox"
                    onChange={(e) => handleAllCheck(e.target.checked)} />
                </th>
                <th>이미지</th>
                <th>상품정보</th>
                <th>수량</th>
                <th>상품구매금액</th>
                <th>할인금액</th>
                <th>배송구분</th>
                <th>배송비</th>
                <th>선택</th>
              </tr>
              {cartList.map((item, index) => {
                if (index === 0) {
                  return (
                    <tr key={index}>
                      <td className="td-1">
                        <input type="checkbox"
                          checked={item.checked}
                          onChange={() => checkCart(item.cid)}
                        />
                      </td>
                      <td className="td-2">
                        <img src={item.image_url} alt="" />
                      </td>
                      <td className="td-3">
                        <p>{item.name}</p>
                      </td>
                      <td className="td-4">
                        <div className="td-4-qty">
                          <p className="qty-num">{item.qty}</p>
                        </div>
                      </td>
                      <td className="td-5">{`${formatNumber(item.discounted_price * item.qty)}원`}</td>
                      <td className="td-6">-</td>
                      <td className="td-7">기본배송(스토어픽업가능)</td>
                      <td className="td-8" rowSpan={cnt}>선택</td>
                      <td className="td-9">
                        <button type="button" className="td-btn">주문하기</button>
                        <button type="button" className="td-btn">관심상품등록</button>
                        <button type="button" className="td-btn" onClick={() => deleteCart(item.cid, item.qty)}>X 삭제</button>
                      </td>
                    </tr>
                  );
                } else {
                  return (
                    <tr key={index}>
                      <td className="td-1">
                        <input type="checkbox"
                          checked={item.checked}
                          onChange={() => checkCart(item.cid)}
                        />
                      </td>
                      <td className="td-2">
                        <img src={item.image_url} alt="" />
                      </td>
                      <td className="td-3">
                        <p>{item.name}</p>
                      </td>
                      <td className="td-4">
                        <div className="td-4-qty">
                          <p className="qty-num">{item.qty}</p>
                        </div>
                      </td>
                      <td className="td-5">{`${formatNumber(item.discounted_price * item.qty)}원`}</td>
                      <td className="td-6">-</td>
                      <td className="td-7">기본배송(스토어픽업가능)</td>
                      {/* <td className="td-8"></td> */}
                      <td className="td-9">
                        <button type="button" className="td-btn">주문하기</button>
                        <button type="button" className="td-btn">관심상품등록</button>
                        <button type="button" className="td-btn" onClick={() => deleteCart(item.cid, item.qty)}>X 삭제</button>
                      </td>
                    </tr>
                  );
                }
              })}
              <tr>
                <td className="td-foot" colSpan={9}>
                  <div>
                    <p>[기본배송]</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="cart-delete">
            <div className="cart-delete-leftbtn">
              <p>선택상품을</p>
              <button onClick={handleDeleteChecked}>X 삭제하기</button>
            </div>
            <div className="cart-delete-rightbtn">
              <button>스토어픽업 상품 선택</button>
              <button>장바구니비우기</button>
              <button>견적서출력</button>
            </div>
          </div>
        </div>
        <div className="all-cart-box">
          <table className="all-cart-table" border={1}>
            <tr>
              <th>총 상품금액</th>
              <th>총 배송비</th>
              <th>결제예정금액</th>
              <th>적립예정금액</th>
            </tr>
            <tr>
              <td>{`${formatNumber(getTotalPrice())}원`}</td>
              <td>+ 0</td>
              <td>= {`${formatNumber(getTotalPrice())}원`}</td>
              <td>최대 {`${formatNumber(parseInt(getTotalPrice() * 0.005))}원`}</td>
            </tr>
          </table>
          <div>
            <button className="all-cart-btn1">전체상품주문</button>
            <button className="all-cart-btn2">선택상품주문</button>
            <button onClick={() => { navigate("/flowers") }} className="all-cart-lastbtn">쇼핑계속하기</button>
          </div>
        </div>
        <div className="mycart-textbox">
          <div>
            <h3 className="mycart-textbox-title">이용안내</h3>
          </div>
          <div className="mycart-text-content">
            <p>장바구니 이용안내</p>
            <ol className="mycart-text-list">
              <li>선택하신 상품의 수량을 변경하시려면 수량변경 후 [변경] 버튼을 누르시면 됩니다.</li>
              <li>[쇼핑계속하기] 버튼을 누르시면 쇼핑을 계속 하실 수 있습니다.</li>
              <li>장바구니와 관심상품을 이용하여 원하시는 상품만 주문하거나 관심상품으로 등록하실 수 있습니다.</li>
              <li>파일첨부 옵션은 동일상품을 장바구니에 추가할 경우 마지막에 업로드 한 파일로 교체됩니다.</li>
              <li>해외배송 상품과 국내배송 상품은 함께 결제하실 수 없으니 장바구니 별로 따로 결제해 주시기 바랍니다.</li>
              <li>해외배송 가능 상품의 경우 국내배송 장바구니에 담았다가 해외배송 장바구니로 이동하여 결제하실 수 있습니다.</li>
            </ol>
            <p>무이자할부 이용안내</p>
            <ol className="mycart-text-list">
              <li>상품별 무이자할부 혜택을 받으시려면 무이자할부 상품만 선택하여 [주문하기] 버튼을 눌러 주문/결제 하시면 됩니다.</li>
              <li>[전체 상품 주문] 버튼을 누르시면 장바구니의 구분없이 선택된 모든 상품에 대한 주문/결제가 이루어집니다.</li>
              <li>단, 전체 상품을 주문/결제하실 경우, 상품별 무이자할부 혜택을 받으실 수 없습니다.</li>
              <li>무이자할부 상품은 장바구니에서 별도 무이자할부 상품 영역에 표시되어, 무이자할부 상품 기준으로 배송비가 표시됩니다.
                <br />
                실제 배송비는 함께 주문하는 상품에 따라 적용되오니 주문서 하단의 배송비 정보를 참고해주시기 바랍니다.</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
