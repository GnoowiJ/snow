import React from 'react';
import { HomeToCurrentMenuDetail } from '../HomeToCurrentMenu.jsx';
import { PageMainTitle } from '../PageTitle.jsx';

export default function MemberOrderInquiry() {
  return (
    <div className='content'>
      <HomeToCurrentMenuDetail menu1={'마이쇼핑'} menu2={'주문조회'} />
      <PageMainTitle title={'주문조회'} />
      <table border={1} className='order-history-inquiry-box'>
        <tr>
          <td className='order-history-inquiry emphasis-inquiry-button'>주문내역조회 (0)</td>
          <td className='order-history-inquiry' colSpan={2}></td>
        </tr>
      </table>
      <div className='order-inquiry-period-box'>
        <ul>
          <li>
            <select className='order-inquiry-period-state'>
              <option>전체 주문처리 상태</option>
              <option>입금전</option>
              <option>배송준비중</option>
              <option>배송중</option>
              <option>배송완료</option>
            </select>
          </li>
          <li>
            <button type='button' className='period-lookup-button'>오늘</button>
            <button type='button' className='period-lookup-button'>1주일</button>
            <button type='button' className='period-lookup-button'>1개월</button>
            <button type='button' className='period-lookup-button'>3개월</button>
            <button type='button' className='period-lookup-button'>6개월</button>
          </li>
          <li>
            <input type='date' className='period-calendar calendar-start' />
            <p>~</p>
            <input type='date' className='period-calendar calendar-end' />
            <button type='button' className='period-inquiry-button'>조회</button>
          </li>
        </ul>
      </div>
      <div className='order-inquiry-notice'>
        <ul className='order-inquiry-list-box'>
          <li className='order-inquiry-list'>
            기본적으로 최근 3개월 간의 자료가 조회되며, 기간 검색 시 주문처리 완료 후 36개월 이내의 주문내역을 조회하실 수 있습니다.
          </li>
          <li className='order-inquiry-list'>
            주문번호를 클릭하시면 해당 주문에 대한 상세내역을 확인하실 수 있습니다.
          </li>
        </ul>
      </div>
      <div className='order-product-info-inquiry-box'>
        <p>주문 상품 정보</p>
        <div className='order-product-info-inquiry'>
          <ul className='order-product-info-inquiry-item-box'>
            <li className='order-product-info-inquiry-item'>주문일자<br />[주문번호]</li>
            <li className='order-product-info-inquiry-item'>이미지</li>
            <li className='order-product-info-inquiry-item'>상품정보</li>
            <li className='order-product-info-inquiry-item'>수량</li>
            <li className='order-product-info-inquiry-item'>상품구매금액</li>
            <li className='order-product-info-inquiry-item'>주문처리상태</li>
          </ul>
          <div className='order-product-info'>
            <p>주문 내역이 없습니다.</p>
          </div>
          <div className='order-inquiry-pages'>
            <p>&lt;</p>
            <p>1</p>
            <p>&gt;</p>
          </div>
        </div>
      </div>
    </div>
  );
}