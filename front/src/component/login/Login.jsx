import React, { useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from '@fortawesome/free-solid-svg-icons';
import '../../css/style.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as cookie from "../../util/cookies.ts";
import { jwtDecode } from "jwt-decode";

export default function Login({ refreshCartCount }) {
  const navigate = useNavigate();
  // refs
  const refs = {
    userIdRef: useRef(null),
    userPassRef: useRef(null)
  }
  // 로그인 처리
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log(formData);
    const formDataObj = {};
    formData.forEach((value, key) => {
      formDataObj[key] = value;
    })
    // validate Check
    if (formDataObj.userId === "") {
      alert("아이디를 입력하세요.")
      refs.userIdRef.current.focus();
      return false;
    } else if (formDataObj.userPass === "") {
      alert("비밀번호를 입력하세요.")
      refs.userPassRef.current.focus();
      return false;
    } else {
      // db연동
      axios({
        method: "post",
        url: "http://127.0.0.1:3001/member/login",
        data: formDataObj
      }).then((result) => {
        if (result.data.cnt === 1) {
          // cookie에 token 저장
          cookie.setCookie("x-auth-jwt", result.data.token, null);
          // token에서 userInfo 정보를 localStorage에 저장
          const userInfo = jwtDecode(result.data.token);
          localStorage.setItem("userInfo", JSON.stringify(userInfo));

          alert("로그인 성공!");
          refreshCartCount(userInfo);
          navigate("/");
        } else {
          alert("아이디 또는 비밀번호가 일치하지 않습니다.");
          refs.userIdRef.current.value = "";
          refs.userPassRef.current.value = "";
          refs.userIdRef.current.focus();
        }
      })
        .catch((error) => console.log(error));
    }
  }


  return (
    <div className='content'>
      <h3 className='login-title'>Login</h3>
      <form className='login-form' onSubmit={(e) => handleSubmit(e)}>
        <ul className='login-form-list'>
          <li>
            <input type="text" name='userId' className='login-input' placeholder='아이디' ref={refs.userIdRef} />
          </li>
          <li>
            <input type="password" name='userPass' className='login-input' placeholder='비밀번호' ref={refs.userPassRef} />
          </li>
          <li>
            <div className='login-detail'>
              <span className='login-id-save-checkbox'>
                <input type="checkbox" className="login-id-save-button" id="check1" />
                <label for="check1">아이디 저장</label>
              </span>
              <p className='login-secure-connection'><FontAwesomeIcon icon={faLock} />&nbsp;보안접속</p>
            </div>
          </li>
          <li>
            <button type='submit' className='login-button'>로그인</button>
          </li>
        </ul>
      </form>
      <div>
        <ul className='login-button-list'>
          <li>
            <Link to="/login/nonmemberorderinquiry"><button type="button" className='login-help-button'>비회원 주문조회</button></Link>
          </li>
          <li>
            <Link to="/login/findid"><button type="button" className='login-help-button id-find'>아이디찾기</button></Link>
          </li>
          <li>
            <Link to="/login/findpassword">
              <button type="button" className='login-help-button'>비밀번호찾기</button>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className='login-signup-button-notice'>
          <li>
            <p className='login-signup-question'>아직 회원이 아니신가요?</p>
          </li>
          <li>
            <p className='login-signup-guide'>지금 회원가입 하시면 다양하고 특별한 혜택이<br /> 준비되어 있습니다.</p>
          </li>
          <li>
            <Link to="/signup"><button className='login-signup-button'>회원가입</button></Link>
          </li>
        </ul>
      </div>
      <div>
        <p className='sns-login-title'>SNS 간편 로그인</p>
        <ul>
          <li className='sns-login-button-list'>
            <button type="button" className='sns-login-button-area'>
              <img
                src="../../images/Naver_Logo_Icon.png" alt="naverlogo"
                className='sns-login-button' />
            </button>
          </li>
          <li className='sns-login-button-list'>
            <button type="button" className='sns-login-button-area'>
              <img
                src="../../images/Kakaotalk_Logo_Icon.png" alt="Kakaotalklogo"
                className='sns-login-button' />
            </button>
          </li>
          <li className='sns-login-button-list'>
            <button type="button" className='sns-login-button-area'>
              <img
                src="../../images/Facebook_Logo_Icon.png" alt="Facebooklogo"
                className='sns-login-button' />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}