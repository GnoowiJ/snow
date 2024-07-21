import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import KakaoMap from './KakaoMap.jsx';

export default function Store () {
  return (
    <div>
      <div className='store-text'>
        <h2>
          SNOWFOX FLOWER
          <br/>
          Store
        </h2>
        <p>
          스노우폭스 플라워는 언제나 고객님의 근처에 있습니다.
        </p>
      </div>
      <ul className='store-list'>
        <li className='store-content'>
          <img src="https://cafe24.poxo.com/ec01/snowfoxbc/3JPAsJn/jGkesyYvH/tEaeHWMOIYEHOjEEboSw1schaAReZPSQZPTKUdwMjH2vEFSc7kGVoMs5kne03HRIhz9A==/_/file_data/snowfoxbc/2023/12/01/186d3a05b0b818af7e870fc407bceb5b.jpg" alt="" />
          <div className='store-text-box'>
            <h3>강남역점</h3>
            <br />
            <p><FontAwesomeIcon className='icon' icon={faLocationDot} /> 강남구 강남대로 340 경원빌딩 1층</p>
            <p><FontAwesomeIcon className='icon' icon={faClock} /> 08:30~22:30</p>
            <p><FontAwesomeIcon className='icon' icon={faPhone} /> 02-6263-4342</p>
          </div>
          <div>
            <KakaoMap id="map" />
          </div>
        </li>
        <li className='store-content'>
          <img src="https://cafe24.poxo.com/ec01/snowfoxbc/3JPAsJn/jGkesyYvH/tEaeHWMOIYEHOjEEboSw1schaAReZPSQZPTKUdwMjH2vEFSc7kGVoMs5kne03HRIhz9A==/_/file_data/snowfoxbc/2023/12/01/e186cd32a33f434a500ecba906ca5df5.jpg" alt="" />
          <div className='store-text-box'>
            <h3>강남2호점</h3>
            <p><FontAwesomeIcon className='icon' icon={faLocationDot} /> 강남구 강남대로 428 만이빌딩</p>
            <p><FontAwesomeIcon className='icon' icon={faClock} /> 10:00~22:30</p>
            <p><FontAwesomeIcon className='icon' icon={faPhone} /> 02-6225-4342</p>
          </div>
          <div>
            <KakaoMap id={"map2"} />
          </div>
        </li>
        <li className='store-content' >
          <img src="https://cafe24.poxo.com/ec01/snowfoxbc/3JPAsJn/jGkesyYvH/tEaeHWMOIYEHOjEEboSw1schaAReZPSQZPTKUdwMjH2vEFSc7kGVoMs5kne03HRIhz9A==/_/file_data/snowfoxbc/2023/12/01/7d7c375c2ba66b41a67eb66652da0760.jpg" alt="" />
          <div className='store-text-box'>
            <h3>잠실역점</h3>
            <p><FontAwesomeIcon className='icon' icon={faLocationDot} /> 송파구 올림픽로 265 잠실지하상가 C32호</p>
            <p><FontAwesomeIcon className='icon' icon={faClock} /> 08:30~23:00</p>
            <p><FontAwesomeIcon className='icon' icon={faPhone} /> 02-425-4342</p>
          </div>
          <div>
            <KakaoMap id={"map3"} />
          </div>
        </li>
        <li className='store-content' >
          <img src="https://cafe24.poxo.com/ec01/snowfoxbc/3JPAsJn/jGkesyYvH/tEaeHWMOIYEHOjEEboSw1schaAReZPSQZPTKUdwMjH2vEFSc7kGVoMs5kne03HRIhz9A==/_/file_data/snowfoxbc/2023/12/01/e09d93ff9df649b7c0a0a7a50582e841.jpg" alt="" />
          <div className='store-text-box'>
            <h3>잠실2호점</h3>
            <p><FontAwesomeIcon className='icon' icon={faLocationDot} /> 송파구 올림픽로 265 잠실지하상가 B-1호</p>
            <p><FontAwesomeIcon className='icon' icon={faClock} /> 10:00~21:30</p>
            <p><FontAwesomeIcon className='icon' icon={faPhone} /> 02-6261-4342</p>
          </div>
          <div>
            <KakaoMap id={"map4"} />
          </div>
        </li>
      </ul>
    </div>
  );
}