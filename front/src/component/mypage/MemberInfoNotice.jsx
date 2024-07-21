import React from 'react';

export function MemberInfoNotice({name, grade}) {
  return (
    <div className="mypage-info">
        <img src="https://img.echosting.cafe24.com/skin/base_ko_KR/member/img_member_default.gif"></img>
        <div className="v-line"></div>
        <p className="myname-user-notice">저희 쇼핑몰을 이용해주셔서 감사합니다.&nbsp;
          <span className="mypage-name">{name}&nbsp;</span>님은 <span className="mypage-grade">[{grade}]&nbsp;</span>입니다.
        </p>
      </div>
  );
}

/**
* 회원 이름 및 등급 안내
*/
export function MemberNameGrade({name, grade}) {
  return (
    <>
      <span className="mypage-name">{name}&nbsp;</span>님은 <span className="mypage-grade">[{grade}]&nbsp;</span>입니다.
    </>
  );
}