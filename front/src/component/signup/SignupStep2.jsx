import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HomeToCurrentMenu } from '../HomeToCurrentMenu.jsx';
import { PageMainTitle, PageSubTitle } from '../PageTitle.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { MemberNameGrade } from '../mypage/MemberInfoNotice.jsx';


/**
 * Step2 : 회원가입 완료
 */
export default function SignupStep2() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleLogin = () => {
    navigate("/login")
  };

  return (
    <div className='content'>
      <HomeToCurrentMenu menu1='회원가입 완료' />
      <PageMainTitle title='회원가입 완료' />
      <div className='signup-complete-table-box'>
        <PageSubTitle subtitle='회원가입' />
        <p className='signup-complete-notice'>회원가입이 완료 되었습니다.</p>
        <table border="1" className='signup-complete-table'>
          <tr className='signup-table-row'>
            <td colSpan="4" className='signup-complete-table-data'>
              <span><FontAwesomeIcon icon={faCircleExclamation} /></span>
              <span className='signup-complete-gratitude'>저희 쇼핑몰을 이용해주셔서 감사합니다.</span>
            </td>
          </tr>
          <tr>
            <th className='signup-complete-table-head'>
              <img src="https://img.echosting.cafe24.com/skin/base_ko_KR/member/img_member_default.gif"></img>
            </th>
            <td className='signup-complete-table-data-title'>
              <p>아이디</p>
              <p>이름</p>
              <p>이메일</p>
            </td>
            <td className='signup-complete-table-data-content'>
              <p>{state.userId}</p>
              <p>{state.userName}</p>
              <p>{`${state.emailId}@${state.emailDomain}`}</p>
            </td>
          </tr>
        </table>
        <MemberNameGrade name={state.userName} grade="일반회원" />
        <div className='signup-complete-button-box'>
          <button type='button'
            onClick={handleLogin}
            className='signup-login-button'>로그인</button>
          <Link to='/'>
            <button type='button' className='signup-complete-button'>완료</button>
          </Link>
        </div>
      </div>
    </div>
  );
}