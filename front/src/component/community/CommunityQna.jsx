import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { getUser } from "../../util/localStorage.ts";

/**
 * 커뮤니티 1:1 문의 페이지
 * @returns
 */
export default function CommunityQna() {
  const [getQnaList, setGetQnaList] = useState([]);
  const navigate = useNavigate();
  const userInfo = getUser();
  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);
  // 페이지당 게시글 수
  const pageSize = 15;
  // box 하나당 표시할 페이지 수
  const pagesPerBox = 10;
  // 시작점과 끝점
  const offset = (currentPage - 1) * pageSize;
  // 전체 게시글 수
  const [totalQna, setTotalQna] = useState(1);

  useEffect(() => {
    axios.get("http://127.0.0.1:3001/qna")
      .then((result) => {
        setGetQnaList(result.data.qnaList);
        setTotalQna(result.data.totalQna);
      })
      .catch((error) => console.log(error));
  }, []);

  const qnaList = getQnaList ? getQnaList : [];
  // 페이지에 해당하는 게시글만 추출
  const qnaListPerPage = qnaList.slice(offset, offset + pageSize);
  // 필요한 페이지 수
  const totalPages = totalQna % pageSize === 0 ? (totalQna / pageSize) : Math.ceil(totalQna / pageSize);
  // 페이지 리스트
  const pageList = [];
  for (let index = 1; index <= totalPages; index++) {
    pageList.push(index);
  }

  /**
   * 1:1 문의 조회수 업데이트 후 상세페이지 로드
   * @param {*} bqid 
   */
  const updateBqHits = (bqid) => {
    axios({
      method: "post",
      url: "http://127.0.0.1:3001/qna/updateHits",
      data: { bqid: bqid }
    }).then((result) => navigate(`/community/qna/${bqid}`))
      .catch((error) => console.log(error));
  }

  const handlePage = (page) => setCurrentPage(page);

  return (
    <>
      <h2>1:1 문의</h2>
      <div className="qna-search-write">
        <select name="" id="">
          <option value="">제목</option>
          <option value="">내용</option>
          <option value="">작성자</option>
        </select>
        <input type="text" name="" id="" placeholder="검색어를 입력해주세요." />
        <Link className="qna-btn-search" to={"#"}>
          검색
        </Link>
        {userInfo && <Link className="qna-btn-write" to={"write"}>
          글쓰기
        </Link>}
      </div>
      <table className="qna-table">
        <thead>
          <tr>
            <th className="qna-table-rno">번호</th>
            <th className="qna-table-title">제목</th>
            <th className="qna-table-author">작성자</th>
            <th className="qna-table-qdate">작성일</th>
            <th className="qna-table-qhits">조회</th>
          </tr>
        </thead>
        <tbody>
          {qnaListPerPage.map((qna, index) => (
            <tr key={index}>
              <td className="qna-table-rno">{qna.rno}</td>
              <td className="qna-table-title" onClick={() => updateBqHits(qna.bqid)}>
                {qna.bqtitle}
              </td>
              <td className="qna-table-author">{qna.user_name}</td>
              <td className="qna-table-qdate">{qna.bqdate}</td>
              <td className="qna-table-qhits">{qna.bqhits}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ul className="qna-page-area">
        <li>&lt;</li>
        {pageList.map((page, index) => (
          <li key={index} onClick={() => handlePage(page)}>
            {page}
          </li>
        ))}
        <li>&gt;</li>
      </ul>
    </>
  );
}
