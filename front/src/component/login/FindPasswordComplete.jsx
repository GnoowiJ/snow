import React from 'react';
import { HomeToCurrentMenu } from '../HomeToCurrentMenu';
import { PageMainTitle } from '../PageTitle';
import { PageSubTitle } from '../PageTitle';
import { Link, useLocation } from 'react-router-dom';

export default function FindPasswordComplete() {
  const { state } = useLocation();

  return (
    <div className='content'>
      <HomeToCurrentMenu menu1='비밀번호 찾기' />
      <PageMainTitle title='비밀번호 찾기' />
      <div className='findpass-complete-table-box'>
        <PageSubTitle subtitle='임시 비밀번호 전송' />
        <div className='findpass-type-info-box'>
          <ul>
            <li className='findpass-info-list1'>
              <p>임시 비밀번호</p>
              <p><input type="radio" defaultChecked />{state.findType === "findPassByEmail" ? "이메일" : "휴대폰번호"}</p>
            </li>
            <li className='findpass-info-list2'>
              <p>{state.findType === "findPassByEmail" ? "이메일" : "휴대폰번호"}</p>
              <p><span className='findpass-info-list2-num'>{state.findType === "findPassByEmail" ? state.email : state.phone_number}</span></p>
            </li>
          </ul>
        </div>
        <div className='findid-complete-button-box'>
          <Link to="#">
            <button type='button'
              className='temporarypass-send-button'
            >임시 비밀번호 전송</button>
          </Link>
          <Link to="/">
            <button type='button'
              className='findpass-cancel-button'
            >취소</button>
          </Link>
        </div>
      </div>
    </div>
  );
}