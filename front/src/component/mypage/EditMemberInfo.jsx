import React, { useState, useRef, useEffect } from 'react';
import { HomeToCurrentMenu } from '../HomeToCurrentMenu.jsx';
import { PageMainTitle } from '../PageTitle.jsx';
import { MemberInfoNotice } from './MemberInfoNotice.jsx';
import { SignupAddTableTitle, SignupInfoTableTitle } from '../signup/SignupTableTitle.jsx';
import DaumPostcodeEmbed from 'react-daum-postcode';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getUser } from '../../util/localStorage.ts';
import { changeEmailDomain } from '../../apis/validate.js';

export default function EditMemberInfo() {
  const [memberInfo, setMemberInfo] = useState({});
  const [formData, setFormData] = useState(
    {
      receiveInfo: false,
      userId: '',
      userPass: '',
      userPassCheck: '',
      userName: '',
      zipcode: '',
      address: '',
      detailAddress: '',
      landlineNumberHead: '02',
      landlineNumber1: '',
      landlineNumber2: '',
      phoneNumberHead: '010',
      phoneNumber1: '',
      phoneNumber2: '',
      emailId: '',
      emailDomain: '',
      birthyear: '',
      birthmonth: '',
      birthday: '',
      solarLunar: 'solar',
      merryYear: '',
      merryMonth: '',
      merryDay: '',
      partnerBirthYear: '',
      partnerBirthMonth: '',
      partnerBirthDay: ''
    }
  );

  const navigate = useNavigate();
  const userInfo = getUser();


  useEffect(() => {
    axios({
      method: "post",
      url: "http://127.0.0.1:3001/member/memberinfo",
      data: {
        userId: userInfo.userId
      }
    })
      .then((result) => {
        setMemberInfo(result.data)
        setFormData({
          receiveInfo: false,
          userId: result.data.user_id,
          userPass: '',
          userPassCheck: '',
          userName: result.data.user_name,
          zipcode: result.data.zipcode,
          address: result.data.address,
          detailAddress: result.data.detail_address,
          landlineNumberHead: result.data.line_number_first !== null ? result.data.line_number_first : "02",
          landlineNumber1: result.data.line_number_middle !== null ? result.data.line_number_middle : "",
          landlineNumber2: result.data.line_number_last !== null ? result.data.line_number_last : "",
          phoneNumberHead: result.data.phone_number_first,
          phoneNumber1: result.data.phone_number_middle,
          phoneNumber2: result.data.phone_number_last,
          emailId: result.data.email_id,
          emailDomain: result.data.email_domain,
          birthyear: result.data.birth_year,
          birthmonth: result.data.birth_month,
          birthday: result.data.birth_day,
          solarLunar: result.data.birth_date_type,
          merryYear: result.data.marry_year !== null ? result.data.marry_year : "",
          merryMonth: result.data.marry_month !== null ? result.data.marry_month : "",
          merryDay: result.data.marry_day !== null ? result.data.marry_day : "",
          partnerBirthYear: result.data.marry_partner_birth_year !== null ? result.data.marry_partner_birth_year : "",
          partnerBirthMonth: result.data.marry_partner_birth_month !== null ? result.data.marry_partner_birth_month : "",
          partnerBirthDay: result.data.marry_partner_birth_day !== null ? result.data.marry_partner_birth_day : ""
        });
      })
      .catch(error => console.log(error))
  }, []);

  const refs = {
    userIdRef: useRef(null),
    userPassRef: useRef(null),
    userPassCheckRef: useRef(null),
    userNameRef: useRef(null),
    zipcodeRef: useRef(null),
    addressRef: useRef(null),
    detailAddressRef: useRef(null),
    landlineNumber1Ref: useRef(null),
    landlineNumber2Ref: useRef(null),
    phoneNumber1Ref: useRef(null),
    phoneNumber2Ref: useRef(null),
    emailIdRef: useRef(null),
    emailDomainRef: useRef(null),
    birthyearRef: useRef(null),
    birthmonthRef: useRef(null),
    birthdayRef: useRef(null)
  }

  /* 주소검색 Toggle 생성하기 */
  const [isOpen, setIsOpen] = useState(false);

  /* 주소검색 버튼 */
  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  /* DaumPostCode 관련 디자인 및 이벤트 */
  const themeObj = {
    bgColor: '#FFFFFF',
    pageBgColor: '#FFFFFF',
    postcodeTextColor: '#C05850',
    emphTextColor: '#222222',
  };

  const postCodeStyle = {
    width: '380px',
    height: '480px',
  };

  const completeHandler = (data) => {
    const { address, zonecode } = data;
    handleAddress({ zipcode: zonecode, address: address });
  };

  const handleAddress = (e) => {
    setFormData({
      ...formData,
      zipcode: e.zipcode,
      address: e.address
    });
  }

  const closeHandler = (state) => {
    if (state === 'FORCE_CLOSE') {
      setIsOpen(false);
    } else if (state === 'COMPLETE_CLOSE') {
      setIsOpen(false);
      refs.detailAddressRef.current.value = "";
      refs.detailAddressRef.current.focus();
    }
  };
  /** DaumPostCode 관련 디자인 및 이벤트 종료 */

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log('e.target =>', e.target);
    setFormData({ ...formData, [name]: value });
  }
  // console.log("Edited FormData ===> ", formData);

  const handleSubmit = () => {
    axios({
      method: "post",
      url: "http://127.0.0.1:3001/member/update",
      data: formData
    }).then((result) => {
      if (result.data.cnt === 1) {
        alert("회원정보가 수정되었습니다.");
        navigate("/mypage");
      }
    })
      .catch((error) => console.log(error));
  };

  return (
    <div className='content'>
      <HomeToCurrentMenu menu1='회원정보 수정' />
      <PageMainTitle title='회원정보 수정' />
      <MemberInfoNotice name={userInfo.userName} grade='일반회원' />
      <SignupInfoTableTitle />
      <table border="1" className='signup-basic-info-table'>
        <tbody>
          <tr className='signup-basic-info-table-row'>
            <th className='signup-basic-info-table-head'>아이디<span className='required-input-mark'>*</span></th>
            <td className='signup-basic-info-table-data'>
              <input type="text"
                className='signup-basic-info-table-input'
                name="userId"
                value={formData.userId}
                // onChange={handleChange}
                readOnly
              />
              <p className='signup-basic-info-table-input-notice'>(영문 소문자/숫자, 4~16자)</p>
            </td>
          </tr>
          <tr className='signup-basic-info-table-row'>
            <th className='signup-basic-info-table-head'>비밀번호<span className='required-input-mark'>*</span></th>
            <td className='signup-basic-info-table-data'>
              <input type="password"
                className='signup-basic-info-table-input'
                name="userPass"
                value={formData.userPass}
                onChange={handleChange}
              />
              <p className='signup-basic-info-table-input-notice'>(영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10자~16자)</p>
            </td>
          </tr>
          <tr className='signup-basic-info-table-row'>
            <th className='signup-basic-info-table-head'>비밀번호 확인<span className='required-input-mark'>*</span></th>
            <td className='signup-basic-info-table-data'>
              <input type="password"
                className='signup-basic-info-table-input'
                name="userPassCheck"
                value={formData.userPassCheck}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr className='signup-basic-info-table-row'>
            <th className='signup-basic-info-table-head'>이름<span className='required-input-mark'>*</span></th>
            <td className='signup-basic-info-table-data'>
              <input type="text"
                className='signup-basic-info-table-input'
                name="userName"
                value={formData.userName}
                // onChange={handleChange}
                readOnly
              />
            </td>
          </tr>
          <tr className='signup-basic-info-table-row'>
            <th className='signup-basic-info-table-head' rowSpan="3">주소<span className='required-input-mark'>*</span></th>
            <td className='signup-basic-info-table-data'>
              <input type="text"
                placeholder="우편번호"
                className='signup-basic-info-table-input zipcode'
                name='zipcode'
                value={formData.zipcode}
                onChange={handleChange}
                ref={refs.zipcodeRef}
                readOnly />
              <button type="button"
                className='signup-basic-info-table-address-button'
                onClick={handleToggle}>주소검색</button>
            </td>
          </tr>
          <tr className='signup-basic-info-table-row'>
            {/* <th></th> */}
            <td className='signup-basic-info-table-data'>
              <input type="text"
                placeholder="기본주소"
                className='signup-basic-info-table-input basic-address'
                name='address'
                value={formData.address}
                ref={refs.addressRef}
                readOnly />
            </td>
          </tr>
          <tr className='signup-basic-info-table-row'>
            {/* <th></th> */}
            <td className='signup-basic-info-table-data'>
              <input type="text"
                placeholder="나머지 주소"
                className='signup-basic-info-table-input detail-address'
                name='detailAddress'
                value={formData.detailAddress}
                ref={refs.detailAddressRef}
                onChange={handleChange}
              />
            </td>
          </tr>

          {isOpen &&
            <div>
              <DaumPostcodeEmbed
                className="postmodal"
                theme={themeObj}
                style={postCodeStyle}
                onComplete={completeHandler}
                onClose={closeHandler}
              />
            </div>
          }

          <tr className='signup-basic-info-table-row'>
            <th className='signup-basic-info-table-head'>일반전화</th>
            <td className='signup-basic-info-table-data'>
              <select className='signup-basic-info-table-combobox'
                name='landlineNumberHead'
                value={formData.landlineNumberHead}
                onChange={handleChange}
              >
                <option value="02">02</option>
                <option value="031">031</option>
                <option value="032">032</option>
                <option value="033">033</option>
                <option value="041">041</option>
                <option value="042">042</option>
                <option value="043">043</option>
                <option value="044">044</option>
                <option value="051">051</option>
                <option value="052">052</option>
                <option value="053">053</option>
                <option value="054">054</option>
                <option value="055">055</option>
                <option value="061">061</option>
                <option value="062">062</option>
                <option value="063">063</option>
                <option value="064">064</option>
              </select>
              <p className='signup-basic-info-hyphen'>-</p>
              <input type="text"
                className='signup-basic-info-table-input middle-number'
                name='landlineNumber1'
                value={formData.landlineNumber1}
                onChange={handleChange}
              />
              <p className='signup-basic-info-hyphen'>-</p>
              <input type="text"
                className='signup-basic-info-table-input last-number'
                name='landlineNumber2'
                value={formData.landlineNumber2}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr className='signup-basic-info-table-row'>
            <th className='signup-basic-info-table-head'>
              휴대전화<span className='required-input-mark'>*</span>
            </th>
            <td className='signup-basic-info-table-data'>
              <select className='signup-basic-info-table-combobox'
                name='phoneNumberHead'
                value={formData.phoneNumberHead}
                onChange={handleChange}
              >
                <option value="010" className='signup-basic-info-table-first-number'>010</option>
                <option value="011" className='signup-basic-info-table-first-number'>011</option>
                <option value="016" className='signup-basic-info-table-first-number'>016</option>
                <option value="017" className='signup-basic-info-table-first-number'>017</option>
                <option value="018" className='signup-basic-info-table-first-number'>018</option>
                <option value="019" className='signup-basic-info-table-first-number'>019</option>
              </select>
              <p className='signup-basic-info-hyphen'>-</p>
              <input type="text"
                className='signup-basic-info-table-input middle-number'
                name='phoneNumber1'
                onChange={handleChange}
                value={formData.phoneNumber1}
              />
              <p className='signup-basic-info-hyphen'>-</p>
              <input type="text"
                className='signup-basic-info-table-input last-number'
                name='phoneNumber2'
                onChange={handleChange}
                value={formData.phoneNumber2}
              />
            </td>
          </tr>
          <tr className='signup-basic-info-table-row'>
            <th className='signup-basic-info-table-head'>이메일<span className='required-input-mark'>*</span></th>
            <td className='signup-basic-info-table-data'>
              <input type="text"
                className='signup-basic-info-table-input'
                name='emailId'
                value={formData.emailId}
                onChange={handleChange}
              />&nbsp;@&nbsp;
              <input type="text"
                className='signup-basic-info-table-input'
                name='emailDomain'
                value={formData.emailDomain}
                onChange={handleChange}
                ref={refs.emailDomainRef}
              />&nbsp;
              <select name="emailDomain"
                      onChange={(e) => changeEmailDomain(e, refs, handleChange)}>
                <option value="self">직접입력</option>
                <option value="naver.com">네이버</option>
                <option value="gmail.com">구글</option>
                <option value="kakao.com">카카오</option>
                <option value="nate.com">네이트</option>
              </select>
            </td>
          </tr>
          <tr className='edit-member-info-table-row'>
            <th className='signup-basic-info-table-head'>이메일 수신여부<span className='required-input-mark'>*</span></th>
            <td className='signup-basic-info-table-data edit-member-info-table-data'>
              <label>
                <input type='radio' name='receiveInfo' defaultChecked />수신함
              </label>
              <label>
                <input type='radio' name='receiveInfo' />수신안함
              </label>
              <p>쇼핑몰에서 제공하는 유익한 이벤트 소식을 이메일로 받으실 수 있습니다.</p>
            </td>
          </tr>
        </tbody>
      </table>
      <SignupAddTableTitle />
      <table border="1" className='signup-add-info-table'>
        <tbody>
          <tr className='signup-add-info-table-row'>
            <th className='signup-add-info-table-head'>생년월일<span className='required-input-mark'>*</span></th>
            <td className='signup-add-info-table-data'>
              <input type="text"
                className='signup-add-info-table-input input-year'
                name='birthyear'
                value={formData.birthyear}
                onChange={handleChange}
              // ref={refs.birthyearRef}
              />
              <p className='signup-add-info-table-input-year'>년</p>
              <input type="text"
                className='signup-add-info-table-input input-month'
                name='birthmonth'
                value={formData.birthmonth}
                onChange={handleChange}
              // ref={refs.birthmonthRef}
              />
              <p className='signup-add-info-table-input-month'>월</p>
              <input type="text"
                className='signup-add-info-table-input input-day'
                name='birthday'
                value={formData.birthday}
                onChange={handleChange}
              // ref={refs.birthdayRef}
              />
              <p className='signup-add-info-table-input-day'>일</p>
              <div className='signup-add-info-table-birthdate-box'>
                <label for="solar">
                  <input type="radio" name="solarLunar" value="solar"
                    onChange={handleChange}
                    defaultChecked
                  />양력
                </label>
                <label for="lunar">
                  <input type="radio" name="solarLunar" value="lunar"
                    onChange={handleChange}
                  />음력
                </label>
              </div>
            </td>
          </tr>
          <tr className='signup-add-info-table-row'>
            <th className='signup-add-info-table-head'>결혼기념일</th>
            <td className='signup-add-info-table-data'>
              <input type="text" className='signup-add-info-table-input input-year'
                name="merryYear"
                value={formData.merryYear}
                onChange={handleChange}
              />
              <p className='signup-add-info-table-input-year'>년</p>
              <input type="text" className='signup-add-info-table-input input-month'
                name="merryMonth"
                value={formData.merryMonth}
                onChange={handleChange}
              />
              <p className='signup-add-info-table-input-month'>월</p>
              <input type="text" className='signup-add-info-table-input input-day'
                name="merryDay"
                value={formData.merryDay}
                onChange={handleChange}
              />
              <p className='signup-add-info-table-input-day'>일</p>
            </td>
          </tr>
          <tr className='signup-add-info-table-row'>
            <th className='signup-add-info-table-head'>배우자생일</th>
            <td className='signup-add-info-table-data'>
              <input type="text" className='signup-add-info-table-input input-year'
                name="partnerBirthYear"
                value={formData.partnerBirthYear}
                onChange={handleChange}
              />
              <p className='signup-add-info-table-input-year'>년</p>
              <input type="text" className='signup-add-info-table-input input-month'
                name="partnerBirthMonth"
                value={formData.partnerBirthMonth}
                onChange={handleChange}
              />
              <p className='signup-add-info-table-input-month'>월</p>
              <input type="text" className='signup-add-info-table-input input-day'
                name="partnerBirthDay"
                value={formData.partnerBirthDay}
                onChange={handleChange}
              />
              <p className='signup-add-info-table-input-day'>일</p>
            </td>
          </tr>
        </tbody>
      </table>
      <div className='member-info-edit-button-box1'>
        <button type='button' className='member-withdraw-button'>회원탈퇴</button>
      </div>
      <div className='member-info-edit-button-box2'>
        <div className='member-info-edit-button-box3'>
          {/* <Link to="/mypage"> */}
          <button type='button' className='member-info-edit-button' onClick={handleSubmit}>회원정보 수정</button>
          {/* </Link> */}
          <Link to="/">
            <button type='button' className='member-info-edit-cancel-button'>취소</button>
          </Link>
        </div>
      </div>
    </div>
  );
}