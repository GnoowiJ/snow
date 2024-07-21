import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUser } from "../../util/localStorage.ts";

export default function CommunityQnaWrite() {
  const refs = {
    userNameRef: useRef(null),
    emailIdRef: useRef(null),
    emailDomainRef: useRef(null),
    emailDomainSelectRef: useRef(null),
    userPhoneFirstRef: useRef(null),
    userPhoneMiddleRef: useRef(null),
    userPhoneLastRef: useRef(null),
    titleRef: useRef(null),
    userClaimRef: useRef(null),
  };
  const navigate = useNavigate();
  const userInfo = getUser();
  const [writeUser, setWriteUser] = useState({});

  useEffect(() => {
    axios({
      method: "post",
      url: "http://127.0.0.1:3001/qna/getUser",
      data: { userId: userInfo.userId }
    }).then((result) => setWriteUser(result.data))
      .catch((error) => console.log(error));
  }, []);

  // 입력 데이터 처리
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObj = {};
    formData.forEach((value, key) => {
      if (key === "emailDomain" && value === "self") {
        formDataObj["emailDomain"] = refs.emailDomainRef.current.value;
      } else {
        formDataObj[key] = value;
      }
    });
    formDataObj.userId = userInfo.userId;
    // DB 연동
    axios({
      method: "post",
      url: "http://127.0.0.1:3001/qna/write",
      data: formDataObj
    }).then((result) => navigate("/community/qna"))
      .catch((error) => console.log(error));
  }

  // 다시 쓰기
  function handleReset() {
    refs.titleRef.current.value = "";
    refs.userClaimRef.current.value = "";
  }

  return (
    <div className="content">
      <h1>Q&A 글쓰기</h1>
      <form onSubmit={handleSubmit} className="qna-write-form">
        <table className="qna-write-table">
          <tbody>
            <tr>
              <th>성명</th>
              <td>
                <input type="text" name="userName" id="userName" className="qna-write-input-name"
                  value={userInfo.userName} ref={refs.userNameRef} readOnly />
              </td>
            </tr>
            <tr>
              <th>이메일</th>
              <td>
                <input type="text" name="emailId" id="emailId" className="qna-write-input-email-id" value={writeUser.email_id} ref={refs.emailIdRef} readOnly />
                <span className="qna-write-input-divide">@</span>
                <input type="text" name="emailDomain" id="emailDomain" className="qna-write-input-email-domain" value={writeUser.email_domain} ref={refs.emailDomainRef} readOnly />
              </td>
            </tr>
            <tr>
              <th>휴대폰번호</th>
              <td>
                <input type="text" name="userPhoneMiddle" id="userPhoneMiddle" className="qna-write-input-phone-middle" value={writeUser.phone_number_first} ref={refs.userPhoneFirstRef} readOnly />
                <span className="qna-write-input-divide">–</span>
                <input type="text" name="userPhoneMiddle" id="userPhoneMiddle" className="qna-write-input-phone-middle" value={writeUser.phone_number_middle} ref={refs.userPhoneMiddleRef} readOnly />
                <span className="qna-write-input-divide">–</span>
                <input type="text" name="userPhoneLast" id="userPhoneLast" className="qna-write-input-phone-last" value={writeUser.phone_number_last} ref={refs.userPhoneLastRef} readOnly />
              </td>
            </tr>
            <tr>
              <th>글제목</th>
              <td>
                <input type="text" name="title" id="title" className="qna-write-input-title" ref={refs.titleRef} />
              </td>
            </tr>
            <tr>
              <th>문의내용</th>
              <td>
                <textarea name="userClaim" id="userClaim" ref={refs.userClaimRef}></textarea>
              </td>
            </tr>
            <tr>
              <th>첨부파일</th>
              <td>
                <input type="file" name="" id="" />
              </td>
            </tr>
            {/* <tr>
            <th>자동입력방지</th>
            <td></td>
          </tr> */}
            <tr>
              <th>비밀글</th>
              <td>
                <input type="radio" name="qnaPrivacy" id="qnaPrivacy" value="privacy" defaultChecked />비밀글
                <input type="radio" name="qnaPrivacy" id="qnaPrivacy" value="public" />공개글
              </td>
            </tr>
          </tbody>
        </table>
        <div className="qna-write-btn">
          <button className="qna-write-insert" type="submit">
            등록
          </button>
          <button className="qna-write-reset" type="button" onClick={handleReset}>
            다시쓰기
          </button>
          <Link to="/community/qna">
            <button className="qna-write-list" type="button">
              목록으로 이동
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
