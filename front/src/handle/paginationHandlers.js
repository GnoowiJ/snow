


// 이전 페이지로 이동하는 핸들러
export const handlePrevPage = (currentPage, setCurrentPage) => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1)); // 현재 페이지를 이전 페이지로 업데이트
  };
  
  // 다음 페이지로 이동하는 핸들러
  export const handleNextPage = (currentPage, setCurrentPage, totalPages) => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages)); // 현재 페이지를 다음 페이지로 업데이트
  };
  
  // 페이지 클릭 핸들러
  export const handlePageClick = (pageNumber, setCurrentPage) => {
    setCurrentPage(pageNumber); // 현재 페이지 업데이트
  };