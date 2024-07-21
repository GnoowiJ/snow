import React from 'react';
import { HomeToCurrentMenu } from '../HomeToCurrentMenu';
import { PageMainTitle, PageSubTitle } from '../PageTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

export default function FindeIdComplete() {
  const { state } = useLocation();

  return (
    <div className='content'>
      <HomeToCurrentMenu menu1='아이디 찾기' />
      <PageMainTitle title='아이디 찾기' />
      <div className='login-complete-table-box'>
        <PageSubTitle subtitle='아이디 찾기' />
        <p className='login-complete-notice'>고객님의 아이디 찾기가 완료되었습니다.</p>
        <table border="1" className='login-complete-table'>
          <tr className='login-table-row'>
            <td colSpan="4" className='login-complete-table-data'>
              <span><FontAwesomeIcon icon={faCircleExclamation} /></span>
              <span className='login-complete-gratitude'>
                저희 쇼핑몰을 이용해주셔서 감사합니다. <br />
                다음 정보로 가입된 아이디가 총 <span className='findid-count'>{state.length}</span>개 있습니다.
              </span>
            </td>
          </tr>
          <tr >
            <th className='login-complete-table-head' rowSpan={2}>
              <img src="https://img.echosting.cafe24.com/skin/base_ko_KR/member/img_member_default.gif"></img>
            </th>
            <td className='login-complete-table-data-title'>
              <p>이름</p>
              <p>{state[0].findType === "findIdByEmail" ? "이메일" : "휴대폰번호"}</p>
            </td>
            <td className='login-complete-table-data-content'>
              <p>{state[0].user_name}</p>
              <p>{state[0].findType === "findIdByEmail" ? state[0].email : state[0].phone_number}</p>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              {state.map((findId, index) => (
                <div>
                  {index === 0
                    ? <input type='radio' name='findIdResult' value={findId.user_id} key={index} defaultChecked />
                    : <input type='radio' name='findIdResult' value={findId.user_id} key={index} />}{findId.user_id} (개인회원, 2024-05-06 가입)
                </div>
              ))}
              {/* <label>
                <input type='radio' defaultChecked />hong**** (개인회원, 2024-05-06 가입)
              </label> */}
            </td>
          </tr>
        </table>
        <div className='findid-complete-button-box'>
          <Link to="/login">
            <button type='button'
              className='findid-complete-login-button'
            >로그인</button>
          </Link>
          <Link to="/login/findpassword">
            <button type='button'
              className='findid-findpass-button'
            >비밀번호 찾기</button>
          </Link>
        </div>
      </div>

    </div>
  );
}