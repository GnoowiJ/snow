import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


export default function Subscript() {
  const [content, setContent] = useState({})

  const handlePage = (e) => {
    let id = e.currentTarget.getAttribute('id')

    if (id === 'fs') {
      setContent({
        title: '꽃다발 S사이즈',
        price: '29,900원'
      })
    }
    else if (id === 'fm') {
      setContent({
        title: '꽃다발 M사이즈',
        price: '42,900원'
      })
      
    }
    else if (id === 'ps') {
      setContent({
        title: '파머스 s사이즈',
        price: '18,900원'
      })
    }
    else if (id === 'pm') {
      setContent({
        title: '파머스 M사이즈',
        price: '27,900원'
      })
    }
    else if (id === 'pl') {
      setContent({
        title: '파머스 L사이즈',
        price: '36,900원'
      })
    }
  }



  const [hideShow, setHideShow] = useState({
    subsFaq1: false,
    subsFaq2: false,
    subsFaq3: false,
    subsFaq4: false
  })

  const [faq1, setFaq1] = useState(false) 

  const hadleHideShow = (e) => {
    let id = e.target.id
    if (id === "faq1") {
      setHideShow({
        subsFaq1: !hideShow.subsFaq1,
        subsFaq2: false,
        subsFaq3: false,
        subsFaq4: false
      })
    } else if (id === "faq2") {
      setHideShow({
        subsFaq1: false,
        subsFaq2: !hideShow.subsFaq2,
        subsFaq3: false,
        subsFaq4: false
      })
    } else if (id === "faq3") {
      setHideShow({
        subsFaq1: false,
        subsFaq2: false,
        subsFaq3: !hideShow.subsFaq3,
        subsFaq4: false
      })
    } else if (id === "faq4") {
      setHideShow({
        subsFaq1: false,
        subsFaq2: false,
        subsFaq3: false,
        subsFaq4: !hideShow.subsFaq4
      })
    }
  }
  const handleArrow = (hideShow) => {
    return hideShow ? <p className='faq-arrow'><FontAwesomeIcon icon={faChevronUp} /></p> :
      <p className='faq-arrow'><FontAwesomeIcon icon={faChevronDown} /></p>
    }
    

    
    return (
      <div>
      <div className='subs-box'>
        <h2>정기구독 혜택</h2>
        <ul className='subs-benefit-list'>
          <li className='subs-benefit'>
            <img className='subs-benefit-img' src="https://snowfoxflowers.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/196011d14eddad41e9572a864de696d9.jpg" alt="" />
            <p>꽃가위·화병 증정</p>
          </li>
          <li className='subs-benefit'>
            <img className='subs-benefit-img' src="https://snowfoxflowers.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/a0af147372c4e44741a49b28fa0beb45.jpg" alt="" />
            <p>모든 회차 꽃 영양제 증정</p>
          </li>
          <li className='subs-benefit'>
            <img className='subs-benefit-img' src="https://snowfoxflowers.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/067e31d7ea4101b1bff75529f1ee11e4.jpg" alt="" />
            <p>첫 구독 적립금 지급</p>
          </li>
          <li className='subs-benefit'>
            <img className='subs-benefit-img' src="https://snowfoxflowers.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/943419b5471b5a08be775501a2955f9c.jpg" alt="" />
            <p>구독 최대 10% 할인</p>
          </li>
        </ul>
      </div>
      <div className='subs-lineup'>
        <h2>구독 라인업</h2>
        <div className='subs-lineup-box'>
          <img className='subs-lineup-img' src="https://snowfoxflowers.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/b8928f61248e873202951ecfe41d2868.jpg" alt="" />
          <div>
            <h3 className='subs-lineup-title'>꽃다발 라인</h3>
            <div className='subs-lineup-text'>
              <Link to="/SubscriptProduct" state={{title: '꽃다발 S사이즈', price: '29,900원'}}>
                <div onClick={handlePage} id="fs" className='subs-lineup-f'>
                  <p>S사이즈</p>
                  <p>29,900원</p>
                </div>
              </Link>
              <Link to="/SubscriptProduct" state={{title: '꽃다발 M사이즈', price: '42,900원'}}>
                <div onClick={handlePage} id="fm" className='subs-lineup-f'>
                  <p>M사이즈</p>
                  <p>42,900원</p>
                </div>
              </Link>
            </div>
            <button onClick={handlePage} id="fs" className='subs-lineup-btn'>구독하기</button>
          </div>
        </div>
        <div className='subs-lineup-box'>
          <img className='subs-lineup-img' src="https://snowfoxflowers.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/3ee4fd07582e270bd46ed033d07d2c77.jpg" alt="" />
          <div>
            <h3 className='subs-lineup-title'>파머스 라인</h3>
            <div className='subs-lineup-text'>
              <Link to="/SubscriptProduct" state={{title: '파머스 S사이즈', price: '18,900원'}}>
                <div onClick={handlePage} id="ps" className='subs-lineup-p'>
                  <p>S사이즈</p>
                  <p>18,900원</p>
                </div>
              </Link>
              <Link to="/SubscriptProduct" state={{title: '파머스 M사이즈', price: '27,900원'}}>
                <div onClick={handlePage} id="pm" className='subs-lineup-p'>
                  <p>M사이즈</p>
                  <p>27,900원</p>
                </div>
              </Link>
              <Link to="/SubscriptProduct" state={{title: '파머스 L사이즈', price: '36,900원'}}>
                <div onClick={handlePage} id="pl" className='subs-lineup-p'>
                  <p>L사이즈</p>
                  <p>36,900원</p>
                </div>
              </Link>
            </div>
            <button onClick={handlePage} id="ps" className='subs-lineup-btn'>구독하기</button>
          </div>
        </div>
      </div>
      <div className='subs-info-box'>
        <h2>꽃 구독 이용방법</h2>
        <p>스노우폭스 플라워 꽃구독, 이렇게 시작해보세요!</p>
        <ul>
          <li className='subs-info-list'>
            <img src="https://snowfoxflowers.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/8ac7f89718674f0ebc5c7c1f891cc07a.jpg" alt="" />
          </li>
          <li className='subs-info-list'>
            <img src="https://snowfoxflowers.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/9f19939acf2b8cf385789ab6d89bf092.jpg" alt="" />
          </li>
          <li className='subs-info-list'>
            <img src="https://snowfoxflowers.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/4aac90a2c7567a7b8a3b2a6ccfb3c8c9.jpg" alt="" />
          </li>
        </ul>
      </div>
      <div className='subs-faq-container'>
        <h2>정기구독FAQ</h2>
        <p>자주 물어보시는 질문. 답변해드려요!</p>
        <div>
          <div onClick={hadleHideShow} id="faq1" className='faq-title'>
            <h4>꽃 주문 후 수령일에 맞춰 꽃이 올까요?</h4>
            {handleArrow(hideShow.subsFaq1)}
          </div>
          {hideShow.subsFaq1 && (
            <div className='subs-faq-text'>
              <p>
                네, 대부분 수령일에 맞춰 보내드립니다.
              </p>
              <p>
                다만 매일 오전 꽃 입고 및 검수 후, 꽃의 상태가 좋지 못하다면 플로리스트의 판단하에 새로 수급되는 꽃으로 배송을 도와드립니다.
              </p>
              <p>
                이럴 경우 선택하신 배송일보다 1~3일 정도 지연이 될 수 있는 점 양해 부탁드립니다.
              </p>
            </div>
          )}
          <div onClick={hadleHideShow} id="faq2" className='faq-title'>
            <h4>꽃이 이미지와 차이가 나는 거 같아요</h4>
            {handleArrow(hideShow.subsFaq2)}
          </div>
          {hideShow.subsFaq2 && (
            <div className='subs-faq-text'>
              <p>
                꽃은 살아있는 생물이므로 꽃 송이마다 화형, 색상 등 사진과 조금씩 차이가 날 수 있습니다.
              </p>
              <p>
                생화 특성상 계절 또는 시장 수급 상황에 따라 일부 꽃 구성이 유동적으로 변경될 수 있다는 점 양해 부탁드립니다.
              </p>
              <p>
                전체적인 꽃 컬러톤과 느낌은 비슷하게 맞춰서 더욱 예쁜 꽃으로 신경 써서 보내드리고 있습니다.
              </p>
            </div>
          )}
          <div onClick={hadleHideShow} id="faq3" className='faq-title'>
            <h4>배송 받았는데 꽃에 힘이 없어요</h4>
            {handleArrow(hideShow.subsFaq3)}
          </div>
          {hideShow.subsFaq3 && (
            <div className='subs-faq-text'>
              <p>
                배송 시 꽃다발에 물 처리를 하여 발송해 드리고 있으나, 배송 과정에서 꽃이 지쳐 물 내림 현상이 발생하거나 약간의 눌림이 있을 수 있습니다.
              </p>
              <p>
                꽃을 받은 즉시 남아있는 잎들은 제거해 주고 하루 정도 시원한 물에 담가서 통풍이 잘 되는 그늘진 곳에서 보관해 주세요.
              </p>
              <p>
                꽃에 물이 올라서 다시 싱싱하게 살아날 수 있어요.
              </p>
            </div>
          )}
          <div onClick={hadleHideShow} id="faq4" className='faq-title'>
            <h4>수령일을 변경 할 수 있나요?</h4>
            {handleArrow(hideShow.subsFaq4)}
          </div>
          {hideShow.subsFaq4 && (
            <div className='subs-faq-text'>
              <p>
                네 가능합니다. 정기구독을 하는 도중에 꽃 수령일을 변경하고 싶거나 잠시 중단하고 싶을 때는 언제든지 고객센터로 연락주세요.
              </p>
              <p>
                *고객센터 : 02-6229-4342
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}