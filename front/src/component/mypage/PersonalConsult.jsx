import React from 'react';
import { HomeToCurrentMenuDetail } from '../HomeToCurrentMenu.jsx';
import { PageMainTitle } from '../PageTitle';

export default function PersonalConsult() {
  return (
    <div className='content'>
      <HomeToCurrentMenuDetail menu1={'마이쇼핑'} menu2={'1:1 맞춤상담'} />
      <PageMainTitle title={'1:1 맞춤상담'}/>
      <div className='personal-consult-history-box'>
        <ul className='personal-consult-history-list-box'>
          <li className='personal-consult-history-list'>번호</li>
          <li className='personal-consult-history-list'>제목</li>
          <li className='personal-consult-history-list'>작성자</li>
          <li className='personal-consult-history-list'>작성일</li>
          <li className='personal-consult-history-list'>답변</li>
        </ul>
        <div className='personal-consult-history'>
          <p>검색결과가 없습니다.</p>
        </div>
        <div className='personal-consult-write-button'>
          <button>글쓰기</button>
        </div>
        <div className='personal-consult-footer'>
          <select className='personal-consult-footer-selectbox'>
            <option>전체</option>
            <option>미답변</option>
            <option>답변완료</option>
          </select>
          <select className='personal-consult-footer-selectbox'>
            <option>1주일</option>
            <option>1개일</option>
            <option>3개월</option>
            <option>전체</option>
          </select>
          <select className='personal-consult-footer-selectbox'>
            <option>제목</option>
            <option>내용</option>
            <option>글쓴이</option>
          </select>
          <input type='text' />
          <button type='button'>찾기</button>
        </div>
      </div>
    </div>
  );
}