import React, { useEffect, useState } from 'react';
import { HomeToCurrentMenuDetail } from '../HomeToCurrentMenu.jsx';
import { PageMainTitle } from '../PageTitle';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../util/localStorage.ts';

export default function PostManagement() {
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
    axios({
      method: "post",
      url: "http://127.0.0.1:3001/qna/existQnaById",
      data: {
        userId: userInfo.userId
      }
    }).then((result) => {
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

  const handleOpen = (bqid) => {
    axios({
      method: "post",
      url: "http://127.0.0.1:3001/qna/updateHits",
      data: { bqid: bqid }
    }).then((result) => navigate(`/community/qna/${bqid}`))
      .catch((error) => console.log(error));
  };

  const handlePage = (page) => setCurrentPage(page);

  const handleQnaUpdate = (bqid) => {

  };

  const handleQnaDelete = (bqid) => {

  };

  return (
    <div className='content'>
      <HomeToCurrentMenuDetail menu1={'마이쇼핑'} menu2={'게시물 관리'} />
      <PageMainTitle title={'게시물 관리'} />
      <table className="qna-table">
        <thead>
          <tr>
            <th className="qna-table-rno">번호</th>
            <th className="qna-table-title">제목</th>
            <th className="qna-table-author">작성자</th>
            <th className="qna-table-qdate">작성일</th>
            <th className="qna-table-qhits">관리</th>
          </tr>
        </thead>
        <tbody>
          {qnaListPerPage.map((qna, index) => (
            <tr key={index}>
              <td className="qna-table-rno">{qna.rno}</td>
              <td className="qna-table-title" onClick={() => handleOpen(qna.bqid)}>
                {qna.bqtitle}
              </td>
              <td className="qna-table-author">{qna.user_name}</td>
              <td className="qna-table-qdate">{qna.bqdate}</td>
              <td className="qna-table-qhits">
                <div className='qna-table-btn-edit' onClick={() => handleQnaUpdate(qna.bqid)}>수정</div>
                <div className='qna-table-btn-delete' onClick={() => handleQnaDelete(qna.bqid)}>삭제</div>
              </td>
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
    </div>
  );
}