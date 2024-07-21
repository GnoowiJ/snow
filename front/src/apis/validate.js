/**
 * step1 : 회원가입 정보 입력
 * validateCheckStep1() : 회원가입 정보 입력 여부 유효성 체크
 */
export const validateCheckStep1 = (refs) => {
  let checkFlag = true;

  const userId = refs.userIdRef.current;
  const userPass = refs.userPassRef.current;
  const userPassCheck = refs.userPassCheckRef.current;
  const userName = refs.userNameRef.current;
  const zipcode = refs.zipcodeRef.current;
  const address = refs.addressRef.current;
  const detailAddress = refs.detailAddressRef.current;
  const email = refs.emailRef.current;
  const birthdate = refs.birthdateRef.current;

  if(userId.value === ""){
    alert("아이디를 입력해주세요.");
    userId.focus();
    checkFlag = false;
  } else if (userPass.value === ""){
    alert("비밀번호를 입력해주세요.");
    userPass.focus();
    checkFlag = false;
  } else if (userPassCheck.value === ""){
    alert("비밀번호 확인을 입력해주세요.");
    userPassCheck.focus();
    checkFlag = false;
  } else if (userName.value === ""){
    alert("이름을 입력해주세요.");
    userName.focus();
    checkFlag = false;
  } else if (zipcode.value === ""){
    alert("우편번호를 입력해주세요.");
    zipcode.focus();
    checkFlag = false;
  } else if (address.value === ""){
    alert("주소를 입력해주세요.");
    address.focus();
    checkFlag = false;
  } else if (detailAddress.value === ""){
    alert("상세주소를 입력해주세요.");
    detailAddress.focus();
    checkFlag = false;
  } else if (email.value === ""){
    alert("이메일 주소를 입력해주세요.");
    email.focus();
    checkFlag = false;
  } else if (email.value === ""){
    alert("아이디를 입력해주세요.");
    email.focus();
    checkFlag = false;
  } else if (birthdate.value === ""){
    alert("생년월일을 입력해주세요.");
    birthdate.focus();
    checkFlag = false;
  }
  return checkFlag;
}

/**
 * passCheck : 비밀번호 && 비밀번호 확인 체크 (=비밀번호와 비밀번호 확인의 값이 같은지 체크)
 */
export const passCheck = (refs) => {
  let checkFlag = true;
  const pass = refs.userPassRef.current;
  const passCheck = refs.userPassCheckRef.current;

  if(pass.value !== passCheck.value){
    alert("비밀번호가 동일하지 않습니다. 다시 입력해주세요.")
    pass.value = "";
    passCheck.value = "";
    pass.focus();
    checkFlag = false;
  } else {
    alert("비밀번호가 동일합니다.")
  }
  return checkFlag;
}

/**
 * 이메일 주소 선택 시 상세주소 칸에 자동 입력되게 하기
 */
export const changeEmailDomain = (e, refs, handleChange) => {
  // console.log('e.target.name ==> ', e.target.name);
  // console.log('e.target.value ==> ', e.target.value);
  const name = e.target.name;
  const value = e.target.value;
  const emailDomain = refs.emailDomainRef.current;

  if(value === "self"){
    emailDomain.value = "";
    emailDomain.focus();
  } else {
    emailDomain.value = value;
    handleChange(e);
  }
}





/**
 * Step2 : 약관 동의
 * validateCheckStep2() : 유효성 체크 - 이용약관 동의, 개인정보 이용 동의 체크박스
 */
export const validateCheckStep2 = (FormData) => {
  if(!FormData.useTerms){
    alert("이용약관에 동의해주세요.");
    document.getElementById('useTerms').style.outline = "1px solid red";
  } else if(!FormData.personal){
    alert("개인정보 수집 및 이용에 동의해주세요.");
    document.getElementById('personal').style.outline = "1px solid red";
  } else {
  }
}



/**
 * Step3 : 회원가입 완료
 */