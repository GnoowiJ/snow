import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockRotateLeft, faGift, faHeadphonesSimple, faTruck } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../css/style.css';
import ReviewList from "../ReviewList";



export function HomeBanner() {
  return (
    <div className="home-main">
      <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="mySwiper"
            slidesPerView={1}
            loop
          >
      <SwiperSlide>
      <div>
        <img className="home-banner" src="https://snowfoxflowers.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/9426ad84b13ede0b22401b59f64ec8f4.jpg" alt="" />
        <div>
          <div className="banner-text">
            <h2 className="banner-title">
              6.14 KISS Day '키스데이'
            </h2>
            <p>키스를 부르는 꽃 최대 40% 할인행사</p>
            <p>사랑하는 사람에게 특별한 하루를 선물해 보세요.</p>
            <Link to="/specialday" className="link-text">
              <div className="banner-link">
                MORE VIEW
              </div>
            </Link>
          </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
        <img className="home-banner" src="https://snowfoxflowers.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/17ae7268ccf9b381530e37e58c522d61.jpg" alt="" />
        <div>
          <div className="banner-text">
            <h2 className="banner-title">
              제철꽃 리시안셔스 특가 3,900원
            </h2>
            <p>지금 아니면 이 가격에 만나기 어려워요</p>
            <p>한정 수량으로 준비한 여름 대표 꽃, 리시안셔스 빠르게 소진되고 있어요!</p>
            <Link to="/specialday" className="link-text">
              <div className="banner-link">
                MORE VIEW
              </div>
            </Link>
          </div>
        </div>
      </div>
      </SwiperSlide>
      </Swiper>
    </div>
  );
}




export function HomeBrand() {
  return (
    <div className="home-brand">
      <iframe width="806" height="453" src="https://www.youtube.com/embed/TgQ1vdDfyBs?list=TLGG58IvK-Mx948xMzA2MjAyNA" title="나를위한 꽃집 스노우폭스 플라워 Brand Film" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <div className="home-brand-text">
        <p>브랜드스토리</p>
        <h2>Brand Story</h2>
        <p>
          SNOWFOX FLOWERS는 '나를 위한 꽃집' 이라는<br />
          슬로건으로 선물로만 인식되던 꽃을 늘 함께하는<br />
          일상으로 이끌어내는 환경을 지향합니다.
        </p>
        <Link className="brand-text-link brand-link" to="/etc/intro" >
          <div>
            브랜드 스토리 더보기 →
          </div>
        </Link>
      </div>
    </div>
  );
}




export function HomeFlower() {
  return (
    <div className="flower-contain">
      <div className="flower-for-me">
        <p>Flower Shop For me</p>
        <img className="flower-for-me-img" src="https://snowfoxflowers.com/web/upload/free_design/title.png" alt="" />
        <p>선물로만 인식되던 꽃을 일상 속에 가까이하는 문화를 만들어 갑니다.</p>
        <p>플라워 브랜드 최초 양재 aT 화훼센터 절화・분화 경매권을</p>
        <p>승인받아 좋은 품질의 꽃을 합리적인 가격에 제공합니다.</p>
      </div>
      <ul className="operator-info">
        <li>
          <div className="operator-box">
            <img className="operator-img" src="https://snowfoxflowers.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/b4c2cf7f4d8d99afd576f16c98dd8e8a.jpg" alt="" />
          </div>
          <div className="operator-box2">
            <h2>절화·분화 경매권 보유</h2>
            <p>신선하고 좋은 품질의 꽃을 합리적인 가격에 제공</p>
          </div>
        </li>
        <li>
          <div className="operator-box">
            <img className="operator-img" src="https://snowfoxflowers.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/22c0bfeb0289937059b0023d991d4093.jpg" alt="" />
          </div>
          <div className="operator-box2">
            <h2>국내 최초 가격 정찰제</h2>
            <p>내가 원하는 꽃을 한 송이 부터 직접 고를 수 있는 꽃집</p>
          </div>
        </li>
        <li>
          <div className="operator-box">
            <img className="operator-img" src="https://snowfoxflowers.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/f3f315907d70467358f7a140b9f88d61.jpg" alt="" />
          </div>
          <div className="operator-box2">
            <h2>일상 속 즐기는 꽃 문화</h2>
            <p>평범한 일상을 더욱 가치 있게 만들어 주는 나를 위한 꽃</p>
          </div>
        </li>
      </ul >
    </div>
  );
}




export function HomeNewproduct() {
  return (
    <div className="new-product-contain">
      <div className="new-product-text">
        <h2 className="new-product-text-title">New Arrivals</h2>
        <p>스노우폭스 플라워에 새롭게 선보이는 꽃과 식물들을 만나보세요</p>
      </div>
      <div>
        <ul className="new-product-list">
          <Swiper
            style={
              {objectFit:"cover"}
            }
            navigation={true}
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="mySwiper"
            slidesPerView={3}
            loop
          >
            <SwiperSlide>
              <li className="new-product-content">
                <img className="new-product-img" src="https://snowfoxflowers.com/web/product/big/202312/e735e6844ecbc787241a0f964ef83667.jpg" alt="" />
                <p>겨울 이야기 꽃다발 (토퍼, 학사모 별도)</p>
                <p>39,900원</p>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="new-product-content">
                <img className="new-product-img" src="https://snowfoxflowers.com/web/product/big/202207/7d01c2abb338e861a66aa1a0e7cd479b.jpg" alt="" />
                <p>라벤더 가든 꽃바구니</p>
                <p>69,900원</p>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="new-product-content">
                <img className="new-product-img" src="https://snowfoxflowers.com/web/product/big/202403/111d52799a7fd6206eca06fce9b2137a.jpg" alt="" />
                <p>발레리나 핑크 꽃다발</p>
                <p>89,900원</p>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="new-product-content">
                <img className="new-product-img" src="https://snowfoxflowers.com/web/product/big/202306/f5bce91df371594500bf9af9d5c61d5b.jpg" alt="" />
                <p>꿈꾸는 사람들, 라라랜드 꽃다발</p>
                <p>43,900원</p>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="new-product-content">
                <img className="new-product-img" src="https://snowfoxflowers.com/web/product/big/202403/bcd8780c04623b3d03a8bb3f73f4a3a5.jpg" alt="" />
                <p>사랑과 기회는 소중해, 찰리와 초콜릿 공장 꽃다발</p>
                <p>46,900원</p>
              </li>
            </SwiperSlide>
          </Swiper>
        </ul>
      </div>
    </div>
  );
}




export function HomeBestseller() {
  return (
    <div className="bestseller-box">
      <div>
        <div className="bestseller-contain">
          <div className="bestseller-text">
            <h2>Best Seller</h2>
            <p>스노우폭스 플라워 베스트셀러를 소개합니다.</p>
          </div>
          <div>
            <ul className="bestseller-text-list">
              <li><Link to="/flowers">Flowers</Link></li>
              <li><Link to="/plants">Plants</Link></li>
              <li><Link to="/specialday">Special Day</Link></li>
            </ul>
          </div>
        </div>
        <ul className="bestseller-list">
          <li>
            <img src="https://snowfoxflowers.com/web/product/medium/202104/711e5ec6f8e92d80dc1e2f3e44c6c7b5.jpg" alt="" />
            <p>언제나 너와 함께 할 거야 엔젤 꽃다발</p>
            <p>69,000원</p>
          </li>
          <li>
            <img src="https://snowfoxflowers.com/web/product/medium/202101/ca7fa03e621f136d30e51652b9d4909a.jpg" alt="" />
            <p>랩소디 꽃다발</p>
            <p>87,000원</p>
          </li>
          <li>
            <img src="https://snowfoxflowers.com/web/product/medium/20200619/f9acc990dd42b77aecbe97831bc9c883.jpg" alt="" />
            <p>시그널 꽃다발</p>
            <p>129,000원</p>
          </li>
        </ul>
        <div className="moreview">
          <Link className="home-link" to="/bestseller">
            <p>MORE VIEW →</p>
          </Link>
        </div>
      </div>
    </div>
  );
}




export function HomeEvent() {
  return (
    <div className="home-event-box">
      <ul className="home-event-list">
        <li>
          <img src="https://snowfoxflowers.com/file_data/snowfoxbc/2023/12/13/3bd627d4948459e7db7dfe81058ea6e8.jpg" alt="" />
        </li>
        <li>
          <img src="https://snowfoxflowers.com/file_data/snowfoxbc/2023/12/13/b405cdb565350b0f9d9392ab70d29634.jpg" alt="" />
        </li>
      </ul>
      <div className="moreview">
        <Link className="home-link" to="/community/event">
          <p>이벤트 전체보기 →</p>
        </Link>
      </div>
    </div>
  );
}




export function HomeSubscript() {
  return (

    <div className="home-subscript">
      <div className="home-subscript-img">
            <img src="https://snowfoxflowers.com/web/product/medium/202312/9f2872cd49f219b36bae57d535a35890.jpg" alt="" />
      </div>
      <div>
        <h2>정기구독</h2>
        <div className="home-subscript-text">
          <p>평범한 일상을 가치 있게 만들어 주는, 나를 위한 꽃</p>
          <Link to="etc/subscript">
            <p className="home-subscript-btn">정기구독 전체보기 →</p>
          </Link >
        </div>
        <div>
            <img src="https://snowfoxflowers.com/web/product/medium/202312/9f2872cd49f219b36bae57d535a35890.jpg" alt="" />
            <img src="https://snowfoxflowers.com/web/product/medium/202312/48e713d7d3ba14c3d4c292210324c11d.jpg" alt="" />
        </div>
      </div>
    </div >
  );
}




export function HomeReview() {
  return (
    <div className="home-review">
      <div className="home-review-title">
        <h2>Real Review</h2>
        <p>스노우폭스 고객님들의 리뷰가 실시간으로 업데이트됩니다.</p>
      </div>
      <div className="home-review-box">
        <ul className="home-review-list">
        <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        slidesPerView={4}
        modules={[Pagination]}
        className="mySwiper"
        loop
        >
          <li className="home-review-content">
          <SwiperSlide>
            <ReviewList />
          </SwiperSlide>
          </li>
          <li className="home-review-content">
            <SwiperSlide>
            <ReviewList />
            </SwiperSlide>
          </li>
          <li className="home-review-content">
            <SwiperSlide>
              <ReviewList />
            </SwiperSlide>
          </li>
          <li className="home-review-content">
            <SwiperSlide>
              <ReviewList />
            </SwiperSlide>
          </li>
          <li className="home-review-content">
            <SwiperSlide>
              <ReviewList />
            </SwiperSlide>
          </li>
          </Swiper>
        </ul>
      </div>
      <div className="moreview">
        <Link className="home-link" to="/community/review">
          <p>MORE VIEW →</p>
        </Link>
      </div>
    </div>
  );
}



export function HomeFloating() {
  const [scrollTop, setScrollTop] = useState(false)
  const [showFloating, setShowFloating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleShowFloating = () => {
      if (window.scrollY > 450) {
        setShowFloating(true)
      } else {
        setShowFloating(false)
      }
    }
    window.addEventListener("scroll", handleShowFloating)
    return () => {
      window.removeEventListener("scroll", handleShowFloating)
    }
  }, [])

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  const prePage = () => {
    navigate(-1)
  }


  return showFloating && (
    <div>
      <div className="home-floating">
        <ul>
          <li onClick={prePage} className="floating-link">
            <FontAwesomeIcon icon={faClockRotateLeft} size="2x" />
            <p className="floating-content">이전 페이지</p>
          </li>
          <li>
            <Link className="floating-link" to="/community/event">
              <FontAwesomeIcon icon={faGift} size="2x" />
              <p className="floating-content">이벤트</p>
            </Link>
          </li>
          <li>
            <Link className="floating-link" to="/community/faq">
              <FontAwesomeIcon icon={faTruck} size="2x" />
              <p className="floating-content">배송 안내</p>
            </Link>
          </li>
          <li>
            <Link className="floating-link" to="/community/qna">
              <FontAwesomeIcon icon={faHeadphonesSimple} size="2x" />
              <p className="floating-content">문의하기</p>
            </Link>
          </li>
        </ul>
        <div  onClick={handleScroll} className="home-arrow">
          TOP ↑
        </div>
      </div>
    </div>
  );
}