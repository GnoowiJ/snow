/*
  회원가입 내 기본정보 타이틀
*/
export function SignupInfoTableTitle() {
  return (
    <div className='signup-basic-info-subtitle-box'>
      <p className='signup-basic-info-subtitle'>기본정보</p>
      <p className='required-info'><span className='required-input-mark'>*</span>&nbsp;필수입력사항</p>
    </div>
  );
}

/*
  회원가입 내 추가정보 타이틀
*/
export function SignupAddTableTitle() {
  return (
    <div className='signup-add-info-subtitle-box'>
      <p className='signup-add-info-subtitle'>추가정보</p>
    </div>
  );
}