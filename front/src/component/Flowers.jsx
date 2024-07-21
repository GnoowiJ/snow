import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/product.css";
import { Link } from "react-router-dom";
import { handlePrevPage, handleNextPage, handlePageClick } from "../handle/paginationHandlers.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

export default function Flowers() {
  const [selectedCategory, setSelectedCategory] = useState("꽃다발");
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 12;
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    fetchProducts(selectedCategory, currentPage, sortOption);
  }, [selectedCategory, currentPage, sortOption]);

  const fetchProducts = (category, page, sort) => {
    const encodedCategory = encodeURIComponent(category);
    let url = `http://localhost:3001/api/products?category=${encodedCategory}&page=${page}&limit=${itemsPerPage}`;

    if (sort === "신상품") {
      url += "&sort=newest";
    } else if (sort === "낮은가격") {
      url += "&sort=low_price";
    } else if (sort === "높은가격") {
      url += "&sort=high_price";
    } else if (sort === "인기상품") {
      // 인기상품 정렬을 위한 로직 추가
      // 예시: url += "&sort=popular";
    }

    axios
      .get(url)
      .then((response) => {
        setProducts(response.data.products);
        setTotalPages(Math.ceil(response.data.total / itemsPerPage));
      })
      .catch((error) => {
        console.error("Error fetching the products!", error);
      });
  };

  const handleClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSortClick = (sortOption) => {
    setSortOption(sortOption);
    setCurrentPage(1);
  };

  const formatNumber = (number) => {
    return new Intl.NumberFormat('ko-KR').format(number);
  };

  return (
    <div>
      <div className="image-container">
        <p><img src="https://snowfoxflowers.com/web/upload/category/shop1_24_top_676219.jpg" alt="best-seller" /></p>
      </div>
      <div className="category-list">
        <ul>
          {["꽃다발", "꽃바구니", "플라워박스", "1000일 보는 생화", "대형 꽃다발"].map((category) => {
            return category === selectedCategory ? (
              <li
                className="active"
                key={category}
                onClick={() => handleClick(category)}
              >
                {category}
              </li>
            ) : (
              <li key={category} onClick={() => handleClick(category)}>
                {category}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="product-list">
        <div className="sort-list">
          <ul>
            {["신상품", "낮은가격", "높은가격",].map((sortOption) => (
              <li key={sortOption} onClick={() => handleSortClick(sortOption)}>
                {sortOption}
              </li>
            ))}
          </ul>
        </div>
        {selectedCategory && (
          <div className="products-grid">
            {products.map((product, index) => (
              <div key={index} className="product-item">
                <Link to={`/productdetail/${product.id}`} className="product-link">
                  <img src={product.image_url} alt={product.name} />
                  <div className="product_info">
                    <div className="product_name">{product.name}</div>
                    <div className="product_price">
                      <p className="sale_per">{product.sale ? `${product.sale}%` : null}</p>
                      <p className="sale_price">{formatNumber(product.discounted_price)}원</p>
                      <p className="price">{formatNumber(product.price)}원</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="pagination">
        <button onClick={() => handlePrevPage(currentPage, setCurrentPage)} className="left-button"><FontAwesomeIcon icon={faAngleLeft} /></button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`page-button ${index + 1 === currentPage ? 'active' : ''}`}
            onClick={() => handlePageClick(index + 1, setCurrentPage)}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={() => handleNextPage(currentPage, setCurrentPage, totalPages)} className="right-button"><FontAwesomeIcon icon={faAngleRight} /></button>
      </div>
    </div>
  );
}
