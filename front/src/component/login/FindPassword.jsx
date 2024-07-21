import React, { useState } from 'react';
import { HomeToCurrentMenu } from '../HomeToCurrentMenu';
import { PageMainTitle, PageSubTitle } from '../PageTitle.jsx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function FindPassword() {
  const [showCerty, setShowCerty] = useState({ findPassByEmail: true, findPassByPhone: false });
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
      url: "http://127.0.0.1:3001/member/findPass",
      data: formDataObj
    }).then((result) => {
      const resultData = result.data;
      if (!resultData) {
        alert("입력하신 정보로 가입된 회원은 존재하지 않습니다.");
      } else {
        navigate("/login/findpassword/complete", { state: resultData });
      }
    })
      .catch((error) => console.log(error));
  };

  const show = (e) => {
    const type = e.target.value;
    if (type === "findPassByEmail") {
      setShowCerty({ findPassByEmail: true, findPassByPhone: false });
    } else {
      setShowCerty({ findPassByEmail: false, findPassByPhone: true });
    }
  }

  return (
    <div className='content'>
      <HomeToCurrentMenu menu1={'비밀번호 찾기'} />
      <PageMainTitle title={'비밀번호 찾기'} />
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <table border="1" className='findpass-table'>
            <tbody>
              <PageSubTitle subtitle={'비밀번호 찾기'} />
              <tr>
                <th className='findpass-table-head'>
                  <label className='findpass-label'>인증방법</label>
                  <div className='findpass-radio-list'>
                    <div>
                      <label for="findpass-email">
                        <input type="radio" name="certification"
                          value="findPassByEmail" id="findpass-email"
                          defaultChecked onChange={(e) => show(e)} />이메일
                      </label>
                    </div>
                    <div>
                      <label for="findpass-phonenumber">
                        <input type="radio" name="certification"
                          value="findPassByPhone" id="findpass-phonenumber"
                          onChange={(e) => show(e)} />휴대폰번호
                      </label>
                    </div>
                  </div>
                </th>
              </tr>
              <tr>
                <th className='findpass-table-head'>
                  <label className='findpass-label'>아이디</label>
                  <input type="text" name='userId' className='findpass-input' />
                </th>
              </tr>
              <tr>
                <th className='findpass-table-head'>
                  <label className='findpass-label'>이름</label>
                  <input type="text" name='userName' className='findpass-input' />
                </th>
              </tr>
              {showCerty.findPassByEmail &&
                <tr>
                  <th className='findpass-table-head'>
                    <label className='findpass-label'>이메일로 찾기</label>
                    <input type="text" name='email' className='findpass-input' />
                  </th>
                </tr>}
              {showCerty.findPassByPhone && <tr>
                <th className='findpass-table-head'>
                  <label className='findpass-label'>휴대폰 번호로 찾기</label>
                  <div className='findpass-phonenumber'>
                    <input type="text" name='phoneFirst' className='findpass-phonenumber-input' /><p>-</p>
                    <input type="text" name='phoneMiddle' className='findpass-phonenumber-input' /><p>-</p>
                    <input type="text" name='phoneLast' className='findpass-phonenumber-input' />
                  </div>
                </th>
              </tr>}
              <tr>
                <button type="submit" className='findpass-button'>확인</button>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}