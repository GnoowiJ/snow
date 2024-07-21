import React from 'react';

export default function NonMemberOrderInquiry() {
  return (
    <div>
      <div className='content'>
        <h2 className='nonmember-login-title'>비회원 로그인</h2>
        <p className='nonmember-login-subtitle'>비회원의 경우, 주문시의 주문번호로 주문조회가 가능합니다.</p>
      </div>
      <div className='nonmember-order-inquiry-form-box'>
        <form className='nonmember-order-inquiry-form'>
          <table border="1" className='nonmember-order-inquiry-table'>
            <tbody>
              <tr>
                <th className='nonmember-order-inquiry-table-head'>
                  <label className='nonmember-login-label'>주문자명</label>
                  <input type="text" className='nonmember-login-input' />
                </th>
              </tr>
              <tr>
                <th className='nonmember-order-inquiry-table-head'>
                  <label className='nonmember-login-label'>주문번호</label>
                  <input type="text" className='nonmember-login-input' />
                </th>
              </tr>
              <tr>
                <th className='nonmember-order-inquiry-table-head'>
                  <label className='nonmember-login-label'>비회원주문 비밀번호</label>
                  <input type="text" className='nonmember-login-input' />
                </th>
              </tr>
              <tr>
                <button type="button" className='nonmember-login-order-inquiry-button'>조회</button>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}