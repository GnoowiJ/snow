import React, { useState } from 'react';
import SignupStep1 from './SignupStep1.jsx';
import SignupStep2 from './SignupStep2.jsx';
import axios from 'axios';

export default function Signup() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(
    {
      useTerms: false,
      personal: false,
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
  // id validation check 관련 useState
  const [idValidate, setIdValidate] = useState({ message: "", color: "" });


  /* SignupStep1에서 input에 값 입력 이벤트 발생 시 formData에 반영하기 */
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log('e.target =>', e.target);
    setFormData({ ...formData, [name]: value });
    if (name === "userId") handleIdCheck(value);
  }

  // console.log('formData ==>', formData)

  /* SignupStep1에서 회원가입 정보 입력 시 주소검색 */
  const handleAddress = (e) => {
    setFormData({
      ...formData,
      zipcode: e.zipcode,
      address: e.address
    });
  }

  /* SignupStep1에서 약관동의 체크박스에 이벤트 발생시 체크하는 함수 */
  const handleCheck = (type, isChecked) => {
    if (type === "all") {
      setFormData({ ...formData, useTerms: isChecked, personal: isChecked, receiveInfo: isChecked });
    } else {
      setFormData({ ...formData, [type]: !formData[type] });
    }
  }

  /*
  TODO handleIdCheck : 조건에 맞게 아이디 입력했는지, 아이디 중복여부 체크  
  */
  const handleIdCheck = (userId) => {
    // console.log("userId ===> ", userId, userId.length);
    if (userId.length < 4 || userId.length > 16) {
      setIdValidate({ message: " 아이디는 4자리 이상 16자리 이하여야 합니다.", color: "#f00" });
    } else {
      axios({
        method: "post",
        url: "http://127.0.0.1:3001/member/idCheck",
        data: {
          userId: userId
        }
      }).then((result) => {
        if (result.data.cnt === 1) {
          setIdValidate({ message: " 이미 사용중인 아이디입니다. 다시 입력하세요.", color: "#f00" });
        } else {
          setIdValidate({ message: " 사용 가능한 아이디입니다.", color: "#00f" });
        }
      }).catch((error) => console.log(error));
    }
  }

  /* Signup 단계 구분 */
  const nextStep = () => {
    setStep(step + 1);
  }

  return (
    <div>
      {step === 1 && (
        <SignupStep1 next={nextStep}
          formData={formData}
          handleCheck={handleCheck}
          handleChange={handleChange}
          handleAddress={handleAddress}
          idValidate={idValidate}
        />
      )}
      {step === 2 && (
        <SignupStep2 />
      )}
    </div>
  );
}