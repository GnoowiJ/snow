import React, { useState } from 'react';
import { HomeToCurrentMenu } from '../HomeToCurrentMenu.jsx';
import { PageMainTitle, PageSubTitle } from '../PageTitle.jsx';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function FindId() {
  // const [findIdResult, setFindIdResult] = useState({});
  const [showCerty, setShowCerty] = useState({ findIdByEmail: true, findIdByPhone: false });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObj = {};
    let checkFlag = true;
    formData.forEach((value, key) => {
      if (value !== '') {
        formDataObj[key] = value;
      } else checkFlag = false;
    });
    // validation check
    if (!checkFlag) {
      alert("모든 항목을 빠짐없이 입력하세요.");
      return false;
    }
    axios({
      method: "post",
      url: "http://127.0.0.1:3001/member/findId",
      data: formDataObj
    }).then((result) => {
      const resultData = result.data;
      if (!resultData.length) {
        alert("입력하신 정보로 가입된 아이디가 존재하지 않습니다.");
      } else {
        navigate("/login/findid/complete", { state: resultData });
      }
    })
      .catch((error) => console.log(error));
  };

  const show = (e) => {
    const type = e.target.value;
    if (type === "findIdByEmail") {
      setShowCerty({ findIdByEmail: true, findIdByPhone: false });
    } else {
      setShowCerty({ findIdByEmail: false, findIdByPhone: true });
    }
  }

  return (
    <div className='content'>
      <HomeToCurrentMenu menu1='아이디 찾기' />
      <PageMainTitle title='아이디 찾기' />
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <table border="1" className='findid-table'>
            <tbody>
              <PageSubTitle subtitle='아이디 찾기' />
              <tr>
                <th className='findid-table-head'>
                  <label className='findid-label'>인증방법</label>
                  <div className='findid-radio-list'>
                    <div>
                      <label for="findid-email">
                        <input type="radio" name="certification"
                          value="findIdByEmail" id="findid-email"
                          defaultChecked onChange={(e) => show(e)} />이메일
                      </label>
                    </div>
                    <div>
                      <label for="findid-phonenumber">
                        <input type="radio" name="certification"
                          value="findIdByPhone" id="findid-phonenumber"
                          onChange={(e) => show(e)} />휴대폰번호
                      </label>
                    </div>
                  </div>
                </th>
              </tr>
              <tr>
                <th className='findid-table-head'>
                  <label className='findid-label'>이름</label>
                  <input type="text" name='userName' className='findid-input' />
                </th>
              </tr>
              {showCerty.findIdByEmail &&
                <tr>
                  <th className='findid-table-head'>
                    <label className='findid-label'>이메일로 찾기</label>
                    <input type="text" name='userEmail' className='findid-input' />
                  </th>
                </tr>}
              {showCerty.findIdByPhone &&
                <tr>
                  <th className='findid-table-head'>
                    <label className='findid-label'>휴대폰 번호로 찾기</label>
                    <div className='findid-phonenumber'>
                      <input type="text" name='phoneFirst' className='findid-phonenumber-input' />
                      <p>-</p>
                      <input type="text" name='phoneMiddle' className='findid-phonenumber-input' />
                      <p>-</p>
                      <input type="text" name='phoneLast' className='findid-phonenumber-input' />
                    </div>
                  </th>
                </tr>}
              <tr>
                <button type="submit" className='findid-button'>확인</button>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}