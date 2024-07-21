import React, { useRef, useState } from 'react';
import DaumPostcodeEmbed from 'react-daum-postcode';
import { HomeToCurrentMenu } from '../HomeToCurrentMenu.jsx';
import { SignupAddTableTitle, SignupInfoTableTitle } from './SignupTableTitle.jsx';
import { changeEmailDomain } from '../../apis/validate.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

/**
 * Step1 : 회원가입 정보 입력, 약관동의
 */
export default function SignupStep1({ next, formData, handleCheck, handleChange, handleAddress, idValidate }) {

  const [isIdCheck, setIsIdCheck] = useState(true);
  const navigate = useNavigate();

  /* 유효성 체크 후 해당 칸이 빈칸일 경우, 해당 칸에 포커스 깜빡이게 하기 */
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

  /* submit : 서버 전송 */
  const handleSubmit = () => {
    if (validateCheckStep1()) {
      handleIdCheck(formData.userId);
      if (isIdCheck) {
        if (passCheck()) {
          console.log('submit ==>', formData);

          const url = 'http://127.0.0.1:3001/member/signup'
          axios({
            method: "post",
            url: url,
            data: formData
          }).then((result) => {
            if (result.data.cnt === 1) {
              navigate("/signup/complete", { state: formData });
            }
          })
            .catch((error) => console.log(error));
        }
      } else alert("이미 사용중인 아이디입니다. 다시 입력하세요");
    }
  }

  // validation 체크
  // 대상: 아이디, 비밀번호, 비밀번호확인, 이름, 주소, 휴대전화, 이메일, 생년월일,
  // 이용약관동의, 개인정보수집동의
  const validateCheckStep1 = () => {
    let checkFlag = true;
    if (refs.userIdRef.current.value === '') {
      alert("아이디를 입력하세요");
      // const result = '아이디를 입력해 주세요.'
      refs.userIdRef.current.focus();
      // return result
      checkFlag = false;
    } else if (refs.userPassRef.current.value === '') {
      alert("비밀번호를 입력하세요");
      refs.userPassRef.current.focus();
      checkFlag = false;
    } else if (refs.userPassCheckRef.current.value === '') {
      alert("비밀번호를 한번 더 입력하세요");
      refs.userPassCheckRef.current.focus();
      checkFlag = false;
    } else if (refs.userNameRef.current.value === '') {
      alert("이름을 입력하세요");
      refs.userNameRef.current.focus();
      checkFlag = false;
    } else if (refs.zipcodeRef.current.value === '' || refs.addressRef.current.value === '') {
      alert("주소를 입력하세요");
      // refs.userNameRef.current.focus();
      checkFlag = false;
    } else if (refs.detailAddressRef.current.value === '') {
      alert("상세주소를 입력하세요");
      refs.detailAddressRef.current.focus();
      checkFlag = false;
    } else if (refs.phoneNumber1Ref.current.value === '') {
      alert("휴대전화번호를 입력하세요");
      refs.phoneNumber1Ref.current.focus();
      checkFlag = false;
    } else if (refs.phoneNumber2Ref.current.value === '') {
      alert("휴대전화번호를 입력하세요");
      refs.phoneNumber2Ref.current.focus();
      checkFlag = false;
    } else if (refs.emailIdRef.current.value === '') {
      alert("이메일 아이디를 입력하세요");
      refs.emailIdRef.current.focus();
      checkFlag = false;
    } else if (refs.emailDomainRef.current.value === '') {
      alert("이메일 주소를 입력하세요");
      refs.emailDomainRef.current.focus();
      checkFlag = false;
    } else if (refs.birthyearRef.current.value === '') {
      alert("생년월일을 입력하세요");
      refs.birthyearRef.current.focus();
      checkFlag = false;
    } else if (refs.birthmonthRef.current.value === '') {
      alert("생년월일을 입력하세요");
      refs.birthmonthRef.current.focus();
      checkFlag = false;
    } else if (refs.birthdayRef.current.value === '') {
      alert("생년월일을 입력하세요");
      refs.birthdayRef.current.focus();
      checkFlag = false;
    } else if (!formData.useTerms) {
      alert("이용약관에 동의해 주세요.");
      document.getElementById("useTerms").style.outline = "1px solid red";
      checkFlag = false;
    } else if (!formData.personal) {
      alert("개인정보 수집 및 이용에 동의해 주세요.");
      document.getElementById("personal").style.outline = "1px solid red";
      checkFlag = false;
    }


    return checkFlag;
  };

  /**
   * 아이디 체크
   */
  const handleIdCheck = (userId) => {
    axios({
      method: "post",
      url: "http://127.0.0.1:3001/member/idCheck",
      data: {
        userId: userId
      }
    }).then((result) => {
      if (result.data.cnt === 1) setIsIdCheck(false);
    }).catch((error) => console.log(error));
  }

  /**
   * 비밀번호 확인 체크
   */
  const passCheck = () => {
    let checkFlag = true;
    if (refs.userPassRef.current.value !== refs.userPassCheckRef.current.value) {
      alert("비밀번호가 일치하지 않습니다.");
      refs.userPassRef.current.value = "";
      refs.userPassCheckRef.current.value = "";
      refs.userPassRef.current.focus();
      checkFlag = false;
    }
    return checkFlag;
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

  /**
   * 포커스에 따라 outline 삭제하기
   */
  const handleFocus = (type) => {
    if (type === "useTerms") {
      document.getElementById("useTerms").style.outline = "none";
    } else if (type === "personal") {
      document.getElementById("personal").style.outline = "none";
    } else if (type === "all") {
      document.getElementById("useTerms").style.outline = "none";
      document.getElementById("personal").style.outline = "none";
    }
  }


  return (
    <div className='content'>
      <HomeToCurrentMenu menu1={'회원가입'} />
      <h1 className='signup-title'>회원가입</h1>
      <SignupInfoTableTitle />
      <table border="1" className='signup-basic-info-table'>
        <tbody>
          <tr className='signup-basic-info-table-row'>
            <th className='signup-basic-info-table-head'>아이디<span className='required-input-mark'>*</span></th>
            <td className='signup-basic-info-table-data'>
              <input type="text"
                className='signup-basic-info-table-input'
                name="userId"
                onChange={handleChange}
                // onChange={handleIdCheck}
                value={formData.userId}
                ref={refs.userIdRef}
              />
              <span style={{ color: `${idValidate.color}`, fontSize: '14px' }}>{idValidate.message}</span>
              <p className='signup-basic-info-table-input-notice'>(영문 소문자/숫자, 4~16자)</p>
            </td>
          </tr>
          <tr className='signup-basic-info-table-row'>
            <th className='signup-basic-info-table-head'>비밀번호<span className='required-input-mark'>*</span></th>
            <td className='signup-basic-info-table-data'>
              <input type="password"
                className='signup-basic-info-table-input'
                name="userPass"
                onChange={handleChange}
                value={formData.userPass}
                ref={refs.userPassRef}
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
                onChange={handleChange}
                value={formData.userPassCheck}
                ref={refs.userPassCheckRef}
              />
            </td>
          </tr>
          <tr className='signup-basic-info-table-row'>
            <th className='signup-basic-info-table-head'>이름<span className='required-input-mark'>*</span></th>
            <td className='signup-basic-info-table-data'>
              <input type="text"
                className='signup-basic-info-table-input'
                name="userName"
                onChange={handleChange}
                value={formData.userName}
                ref={refs.userNameRef}
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
                onChange={handleChange}
                value={formData.detailAddress}
                ref={refs.detailAddressRef} />
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
                onChange={handleChange}
                value={formData.landlineNumber1}
                ref={refs.landlineNumber1Ref}
              />
              <p className='signup-basic-info-hyphen'>-</p>
              <input type="text"
                className='signup-basic-info-table-input last-number'
                name='landlineNumber2'
                onChange={handleChange}
                value={formData.landlineNumber2}
                ref={refs.landlineNumber2Ref}
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
                ref={refs.phoneNumber1Ref}
              />
              <p className='signup-basic-info-hyphen'>-</p>
              <input type="text"
                className='signup-basic-info-table-input last-number'
                name='phoneNumber2'
                onChange={handleChange}
                value={formData.phonenumber2}
                ref={refs.phoneNumber2Ref}
              />
            </td>
          </tr>
          <tr className='signup-basic-info-table-row'>
            <th className='signup-basic-info-table-head'>이메일<span className='required-input-mark'>*</span></th>
            <td className='signup-basic-info-table-data'>
              <input type="text"
                className='signup-basic-info-table-input'
                name='emailId'
                onChange={handleChange}
                value={formData.emailId}
                ref={refs.emailIdRef}
              />&nbsp;@&nbsp;
              <input type="text"
                className='signup-basic-info-table-input'
                name='emailDomain'
                onChange={handleChange}
                value={formData.emailDomain}
                ref={refs.emailDomainRef}
              />&nbsp;
              <select name="emailDomain" onChange={(e) => changeEmailDomain(e, refs, handleChange)} >
                <option value="self">직접입력</option>
                <option value="naver.com">네이버</option>
                <option value="gmail.com">구글</option>
                <option value="kakao.com">카카오</option>
                <option value="nate.com">네이트</option>
              </select>
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
                onChange={handleChange}
                value={formData.birthyear}
                ref={refs.birthyearRef}
              />
              <p className='signup-add-info-table-input-year'>년</p>
              <input type="text"
                className='signup-add-info-table-input input-month'
                name='birthmonth'
                onChange={handleChange}
                value={formData.birthmonth}
                ref={refs.birthmonthRef}
              />
              <p className='signup-add-info-table-input-month'>월</p>
              <input type="text"
                className='signup-add-info-table-input input-day'
                name='birthday'
                onChange={handleChange}
                value={formData.birthday}
                ref={refs.birthdayRef}
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
                onChange={handleChange}
                value={formData.merryYear} />
              <p className='signup-add-info-table-input-year'>년</p>
              <input type="text" className='signup-add-info-table-input input-month'
                name="merryMonth"
                onChange={handleChange}
                value={formData.merryMonth} />
              <p className='signup-add-info-table-input-month'>월</p>
              <input type="text" className='signup-add-info-table-input input-day'
                name="merryDay"
                onChange={handleChange}
                value={formData.merryDay} />
              <p className='signup-add-info-table-input-day'>일</p>
            </td>
          </tr>
          <tr className='signup-add-info-table-row'>
            <th className='signup-add-info-table-head'>배우자생일</th>
            <td className='signup-add-info-table-data'>
              <input type="text" className='signup-add-info-table-input input-year'
                name="partnerBirthYear"
                onChange={handleChange}
                value={formData.partnerBirthYear}
              />
              <p className='signup-add-info-table-input-year'>년</p>
              <input type="text" className='signup-add-info-table-input input-month'
                name="partnerBirthMonth"
                onChange={handleChange}
                value={formData.partnerBirthMonth}
              />
              <p className='signup-add-info-table-input-month'>월</p>
              <input type="text" className='signup-add-info-table-input input-day'
                name="partnerBirthDay"
                onChange={handleChange}
                value={formData.partnerBirthDay}
              />
              <p className='signup-add-info-table-input-day'>일</p>
            </td>
          </tr>
        </tbody>
      </table>
      <div className='signup-agree-terms-subtitle-box'>
        <p className='signup-agree-terms-subtitle'>전체 동의</p>
      </div>
      <table border="1" className='signup-agree-terms-table'>
        <tbody>
          <tr className='signup-agree-terms-table-row'>
            <th className='signup-agree-terms-table-head'>
              <label for="agree-all" className='agree-all-label'>
                <input type="checkbox"
                  id="all"
                  className='agree-all-checkbox'
                  onChange={(e) => handleCheck("all", e.target.checked)}
                  onFocus={() => handleFocus("all")} />
                <p className='signup-agree-all-notice'>모든 약관을 확인하고 전체 동의합니다.</p>
              </label>
            </th>
          </tr>
          <tr className='signup-agree-terms-table-row'>
            <td className='signup-agree-terms-table-data'>
              <p className='essential-agree'>[필수] 이용약관 동의</p>
              <textarea className='essential-agree-notice'>
                제1조(목적)
                이 약관은 (주)스노우폭스브랜딩컴퍼니(전자상거래 사업자)가 운영하는 (주)스노우폭스브랜딩컴퍼니 사이버 몰(이하 “몰”이라 한다)에서 제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를 이용함에 있어 사이버 몰과 이용자의 권리?의무 및 책임사항을 규정함을 목적으로 합니다.
                ※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다.」

                제2조(정의)
                ① “몰”이란 (주)스노우폭스브랜딩컴퍼니가 재화 또는 용역(이하 “재화 등”이라 함)을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 재화 등을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 사이버몰을 운영하는 사업자의 의미로도 사용합니다.
                ② “이용자”란 “몰”에 접속하여 이 약관에 따라 “몰”이 제공하는 서비스를 받는 회원 및 비회원을 말합니다.
                ③ ‘회원’이라 함은 “몰”에 회원등록을 한 자로서, 계속적으로 “몰”이 제공하는 서비스를 이용할 수 있는 자를 말합니다.
                ④ ‘비회원’이라 함은 회원에 가입하지 않고 “몰”이 제공하는 서비스를 이용하는 자를 말합니다.

                제3조 (약관 등의 명시와 설명 및 개정)
                ① “몰”은 이 약관의 내용과 상호 및 대표자 성명, 영업소 소재지 주소(소비자의 불만을 처리할 수 있는 곳의 주소를 포함), 전화번호?모사전송번호?전자우편주소, 사업자등록번호, 통신판매업 신고번호, 개인정보보호책임자등을 이용자가 쉽게 알 수 있도록 (주)스노우폭스브랜딩컴퍼니 사이버몰의 초기 서비스화면(전면)에 게시합니다. 다만, 약관의 내용은 이용자가 연결화면을 통하여 볼 수 있도록 할 수 있습니다.
                ② “몰은 이용자가 약관에 동의하기에 앞서 약관에 정하여져 있는 내용 중 청약철회?배송책임?환불조건 등과 같은 중요한 내용을 이용자가 이해할 수 있도록 별도의 연결화면 또는 팝업화면 등을 제공하여 이용자의 확인을 구하여야 합니다.
                ③ “몰”은 「전자상거래 등에서의 소비자보호에 관한 법률」, 「약관의 규제에 관한 법률」, 「전자문서 및 전자거래기본법」, 「전자금융거래법」, 「전자서명법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」, 「방문판매 등에 관한 법률」, 「소비자기본법」 등 관련 법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.
                ④ “몰”이 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 몰의 초기화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다. 다만, 이용자에게 불리하게 약관내용을 변경하는 경우에는 최소한 30일 이상의 사전 유예기간을 두고 공지합니다. 이 경우 “몰“은 개정 전 내용과 개정 후 내용을 명확하게 비교하여 이용자가 알기 쉽도록 표시합니다.
                ⑤ “몰”이 약관을 개정할 경우에는 그 개정약관은 그 적용일자 이후에 체결되는 계약에만 적용되고 그 이전에 이미 체결된 계약에 대해서는 개정 전의 약관조항이 그대로 적용됩니다. 다만 이미 계약을 체결한 이용자가 개정약관 조항의 적용을 받기를 원하는 뜻을 제3항에 의한 개정약관의 공지기간 내에 “몰”에 송신하여 “몰”의 동의를 받은 경우에는 개정약관 조항이 적용됩니다.
                ⑥ 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제 등에 관한 법률, 공정거래위원회가 정하는 전자상거래 등에서의 소비자 보호지침 및 관계법령 또는 상관례에 따릅니다.

                제4조(서비스의 제공 및 변경)
                ① “몰”은 다음과 같은 업무를 수행합니다.
                1. 재화 또는 용역에 대한 정보 제공 및 구매계약의 체결
                2. 구매계약이 체결된 재화 또는 용역의 배송
                3. 기타 “몰”이 정하는 업무
                ② “몰”은 재화 또는 용역의 품절 또는 기술적 사양의 변경 등의 경우에는 장차 체결되는 계약에 의해 제공할 재화 또는 용역의 내용을 변경할 수 있습니다. 이 경우에는 변경된 재화 또는 용역의 내용 및 제공일자를 명시하여 현재의 재화 또는 용역의 내용을 게시한 곳에 즉시 공지합니다.
                ③ “몰”이 제공하기로 이용자와 계약을 체결한 서비스의 내용을 재화등의 품절 또는 기술적 사양의 변경 등의 사유로 변경할 경우에는 그 사유를 이용자에게 통지 가능한 주소로 즉시 통지합니다.
                ④ 전항의 경우 “몰”은 이로 인하여 이용자가 입은 손해를 배상합니다. 다만, “몰”이 고의 또는 과실이 없음을 입증하는 경우에는 그러하지 아니합니다.

                제5조(서비스의 중단)
                ① “몰”은 컴퓨터 등 정보통신설비의 보수점검교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.
                ② “몰”은 제1항의 사유로 서비스의 제공이 일시적으로 중단됨으로 인하여 이용자 또는 제3자가 입은 손해에 대하여 배상합니다. 단, “몰”이 고의 또는 과실이 없음을 입증하는 경우에는 그러하지 아니합니다.
                ③ 사업종목의 전환, 사업의 포기, 업체 간의 통합 등의 이유로 서비스를 제공할 수 없게 되는 경우에는 “몰”은 제8조에 정한 방법으로 이용자에게 통지하고 당초 “몰”에서 제시한 조건에 따라 소비자에게 보상합니다. 다만, “몰”이 보상기준 등을 고지하지 아니한 경우에는 이용자들의 마일리지 또는 적립금 등을 “몰”에서 통용되는 통화가치에 상응하는 현물 또는 현금으로 이용자에게 지급합니다.

                제6조(회원가입)
                ① 이용자는 “몰”이 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로서 회원가입을 신청합니다.
                ② “몰”은 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다.
                1. 가입신청자가 이 약관 제7조제3항에 의하여 이전에 회원자격을 상실한 적이 있는 경우, 다만 제7조제3항에 의한 회원자격 상실 후 3년이 경과한 자로서 “몰”의 회원재가입 승낙을 얻은 경우에는 예외로 한다.
                2. 등록 내용에 허위, 기재누락, 오기가 있는 경우
                3. 기타 회원으로 등록하는 것이 “몰”의 기술상 현저히 지장이 있다고 판단되는 경우
                ③ 회원가입계약의 성립 시기는 “몰”의 승낙이 회원에게 도달한 시점으로 합니다.
                ④ 회원은 회원가입 시 등록한 사항에 변경이 있는 경우, 상당한 기간 이내에 “몰”에 대하여 회원정보 수정 등의 방법으로 그 변경사항을 알려야 합니다.

                제7조(회원 탈퇴 및 자격 상실 등)
                ① 회원은 “몰”에 언제든지 탈퇴를 요청할 수 있으며 “몰”은 즉시 회원탈퇴를 처리합니다.
                ② 회원이 다음 각 호의 사유에 해당하는 경우, “몰”은 회원자격을 제한 및 정지시킬 수 있습니다.
                1. 가입 신청 시에 허위 내용을 등록한 경우
                2. “몰”을 이용하여 구입한 재화 등의 대금, 기타 “몰”이용에 관련하여 회원이 부담하는 채무를 기일에 지급하지 않는 경우
                3. 다른 사람의 “몰” 이용을 방해하거나 그 정보를 도용하는 등 전자상거래 질서를 위협하는 경우
                4. “몰”을 이용하여 법령 또는 이 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우
                ③ “몰”이 회원 자격을 제한정지 시킨 후, 동일한 행위가 2회 이상 반복되거나 30일 이내에 그 사유가 시정되지 아니하는 경우 “몰”은 회원자격을 상실시킬 수 있습니다.
                ④ “몰”이 회원자격을 상실시키는 경우에는 회원등록을 말소합니다. 이 경우 회원에게 이를 통지하고, 회원등록 말소 전에 최소한 30일 이상의 기간을 정하여 소명할 기회를 부여합니다.

                부 칙(시행일) 이 약관은 2017년 12월 16일부터 시행합니다. 부 칙(시행일) 이 약관은 2017년 12월 16일부터 시행합니다.
              </textarea>
              <p className='agree-button'>
                이용약관에 동의하십니까?
                <label for="agree-use" className='agree-button-box'>
                  <input type="checkbox"
                    id="useTerms"
                    checked={formData.useTerms}
                    onChange={() => handleCheck("useTerms")}
                    onFocus={() => handleFocus("useTerms")}
                  />
                  <p className='agree-checkbox'>동의함</p>
                </label>
              </p>
            </td>
          </tr>
          <tr className='signup-agree-terms-table-row'>
            <td className='signup-agree-terms-table-data'>
              <p className='essential-agree'>[필수] 개인정보 수집 및 이용 동의</p>
              <textarea className='essential-agree-notice'>
                1. 개인정보 수집목적 및 이용목적

                가. 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산

                콘텐츠 제공 , 구매 및 요금 결제 , 물품배송 또는 청구지 등 발송 , 금융거래 본인 인증 및 금융 서비스

                나. 회원 관리

                회원제 서비스 이용에 따른 본인확인 , 개인 식별 , 불량회원의 부정 이용 방지와 비인가 사용 방지 , 가입 의사 확인 , 연령확인 , 만14세 미만 아동 개인정보 수집 시 법정 대리인 동의여부 확인, 불만처리 등 민원처리 , 고지사항 전달

                2. 수집하는 개인정보 항목 : 이름 , 생년월일 , 성별 , 로그인ID , 비밀번호 , 자택 전화번호 , 휴대전화번호 , 이메일 , 14세미만 가입자의 경우 법정대리인의 정보

                3. 개인정보의 보유기간 및 이용기간

                원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.

                가. 회사 내부 방침에 의한 정보 보유 사유

                o 부정거래 방지 및 쇼핑몰 운영방침에 따른 보관 : 5년

                나. 관련 법령에 의한 정보보유 사유

                o 계약 또는 청약철회 등에 관한 기록

                -보존이유 : 전자상거래등에서의소비자보호에관한법률
                -보존기간 : 5년

                o 대금 결제 및 재화 등의 공급에 관한 기록

                -보존이유: 전자상거래등에서의소비자보호에관한법률
                -보존기간 : 5년

                o 소비자 불만 또는 분쟁처리에 관한 기록

                -보존이유 : 전자상거래등에서의소비자보호에관한법률
                -보존기간 : 3년

                o 로그 기록

                -보존이유: 통신비밀보호법
                -보존기간 : 3개월

                ※ 동의를 거부할 수 있으나 거부시 회원 가입이 불가능합니다.
              </textarea>
              <p className='agree-button'>
                개인정보 수집 및 이용에 동의하십니까?
                <label for="agree-personal-info" className='agree-button-box'>
                  <input type="checkbox"
                    id="personal"
                    checked={formData.personal}
                    onChange={() => handleCheck("personal")}
                    onFocus={() => handleFocus("personal")}
                  />
                  <p className='agree-checkbox'>동의함</p>
                </label>
              </p>
            </td>
          </tr>
          <tr className='signup-agree-terms-table-row'>
            <td className='signup-agree-terms-table-data'>
              <p className='essential-agree'>[선택] 쇼핑정보 수신 동의</p>
              <textarea className='essential-agree-notice'>
                할인쿠폰 및 혜택, 이벤트, 신상품 소식 등 쇼핑몰에서 제공하는 유익한 쇼핑정보를 SMS나 이메일로 받아보실 수 있습니다.
                단, 주문/거래 정보 및 주요 정책과 관련된 내용은 수신동의 여부와 관계없이 발송됩니다.
                선택 약관에 동의하지 않으셔도 회원가입은 가능하며, 회원가입 후 회원정보수정 페이지에서 언제든지 수신여부를 변경하실 수 있습니다.
              </textarea>
              <p className='agree-button'>
                이메일 수신을 동의하십니까?
                <label for="agree-email-receive" className='agree-button-box'>
                  <input type="checkbox"
                    id="receiveInfo"
                    checked={formData.receiveInfo}
                    onChange={() => handleCheck("receiveInfo")}
                  />
                  <p className='agree-checkbox'>동의함</p>
                </label>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <button type="button"
        className='signup-button'
        onClick={handleSubmit}
      >회원가입</button>

    </div>
  );
}