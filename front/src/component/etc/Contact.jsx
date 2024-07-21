import { width } from '@fortawesome/free-regular-svg-icons/faAddressBook';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact () {
  return (
    <div>
      <div>
        <div className='cont-title-box'>
          <h2 className='cont-title'>
            SNOWFOX FLOWER
            <br/>
            Partnership
          </h2>
          <p>스노우폭스플라워 파트너스는 플라워브랜드 SNOWFOX의 기업고객을 위한 서비스 입니다.</p>
          <p>다년간 축적한 노하우와 체계적인 프로세스를 경험해보세요.</p>
          <p>당신의 비즈니스에 꽃의 생기를 더해 드릴게요!</p>
        </div>
        <div>
          <ul className='cont-img-list'>
            <li className='cont-img-box'>
              <img className='cont-img' src="https://snowfoxflowers.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/29db9baa1cddadc69392afce97afbf14.jpg" alt="" />
              <div className='cont-img-text'>
                <h4>사내복지</h4>
                <p>직원 입사/승진/기념일 축하, 사내행사 꽃을 편지와 함께 준비해서 보내드립니다.</p>
              </div>
            </li>
            <li className='cont-img-box'>
              <img className='cont-img' src="https://snowfoxflowers.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/76ec06a6d4f9250010faea85780e4123.jpg" alt="" />
              <div className='cont-img-text'>
                <h4>플라워 클래스</h4>
                <p>다수의 기업에서 다양한 플라워 클래스를 진행하고 있습니다.</p>
              </div>
            </li>
            <li className='cont-img-box'>
              <img className='cont-img' src="https://snowfoxflowers.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/46723ff14837e20c700a399c0d18beae.jpg" alt="" />
              <div className='cont-img-text'>
                <h4>VIP 고객케어</h4>
                <p>VIP 고객 감사 꽃이나 스페셜 패키지로 이벤트를 준비해 드립니다.</p>
              </div>
            </li>
            <li className='cont-img-box'>
              <img className='cont-img' src="https://snowfoxflowers.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/a422be9f9356bbb31745198458f46fc3.jpg" alt="" />
              <div className='cont-img-text'>
                <h4>프로모션</h4>
                <p>다양한 오프라인 행사에 필요한 꽃전국 대량 발송해 드립니다.</p>
              </div>
            </li>
          </ul>
          <div className='cont-text-box'>
            <div className='cont-text-box1'>
              <p>스노우폭스 플라워</p>
              <p>안심 서비스</p>
            </div>
            <div className='cont-text-box2'>
              <p>스노우폭스 플라워는 매일 가장 신선한 꽃으로 특별 제작을 진행하고 있으며, 특별 제작된 패키지를 전국적으로 안전하게</p>
              <p>배송합니다. 스노우폭스 플라워만의 품질관리 노하우로 최고의 서비스를 약속합니다.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='cont-partner-box'>
        <div>
          <img src="https://snowfoxflowers.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/a833b3ef27a346e31cdd0b2a6ad8e4ad.jpg" alt="" />
        </div>
        <div className='cont-partner-exam'>
          <ul className='cont-partner-list'>
            <li className='cont-partner-content'>
              <img className='cont-partner-img' src="https://snowfoxflowers.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/a0496ed60605e8a55f679b450ee94262.jpg" alt="" />
              <div>
                <b>Disney</b>
                <p>롯데시네마 월드타워점 영화 "엔칸토" 포토부스 연출</p>
              </div>
            </li>
            <li className='cont-partner-content'>
              <img className='cont-partner-img' src="https://snowfoxflowers.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/81659c884467904730a646b8af515637.jpg" alt="" />
              <div>
                <b>인생네컷</b>
                <p>인생네컷 포토존 연출 외 스노우폭스 플라워만의 프레임과 인생내꽃 이벤트</p>
              </div>
            </li>
            <li className='cont-partner-content'>
              <img className='cont-partner-img' src="https://snowfoxflowers.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/2087e3cb7ee6167906960ee47313e7fe.jpg" alt="" />
              <div>
                <b>IBK 기업은행</b>
                <p>IBK 기업은행에서 주최하는 입크 페스티벌 참가</p>
              </div>
            </li>
            <li className='cont-partner-content'>
              <img className='cont-partner-img' src="https://snowfoxflowers.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/3ad4ee0d84ae0aef2f2e3eb0bba3d039.jpg" alt="" />
              <div>
                <b>기업 플라워 클래스</b>
                <p>다수의 기업에서 다양한 플라워 클래스 진행</p>
              </div>
            </li>
            <li className='cont-partner-content'>
              <img className='cont-partner-img' src="https://snowfoxflowers.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/8e7eda6eb088de3fa9501f630c73e9bf.jpg" alt="" />
              <div>
                <b>현대 트랜시스</b>
                <p>신입 입사 축하 단체 꽃바구니 제작</p>
              </div>
            </li>
            <li className='cont-partner-content'>
              <img className='cont-partner-img' src="https://snowfoxflowers.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/379f159b3639a30613671142522ddf0d.jpg" alt="" />
              <div>
                <b>SK C&C</b>
                <p>임원 승진 꽃바구니 단체 제작</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className='cont-form-container'>
        <div className='cont-form-box'>
          <div className='cont-form-textbox'>
            <div className='cont-form-title'>
              <span>
                SNOWFOX FLOWERS
                <br />
                partners
                <br />
              </span>
              <h2>기업제휴 상담 신청서</h2>
            </div>
            <p>모든 플라워 서비스, 스노우폭스 플라워로 맡겨주세요</p>
            <p>신청서를 작성해 주시면 상담을 통해 개별 커스텀이 가능합니다</p>
            <div className='cont-form-info'>
              <div className='cont-form-info-text'>
                <b>스노우폭스 플라워 제휴 문의</b>
                <Link className='link-btn' to="/community/qna">
                <p className='cont-form-info-btn'>문의하기</p>
                </Link>
              </div>
              <p>
                Tel. 070-7613-4342
                <br />
                E-mail. partners@snowfoxbc.com
                <br />
                AM 10:00 ~ PM 17:00 (주말, 공휴일 휴무)
              </p>
            </div>
          </div>
          <div className='cont-submit-form'>
            <div>
              <h4>연락 정보</h4>
              <div className='cont-submit-inputbox'>
                <input className='cont-submit-input' type="text" placeholder='이름' required/>
                <input className='cont-submit-input gap' type="text" placeholder='업체명' required/>
                <br />
                <input className='cont-submit-input' type="text" placeholder='연락처'/>
                <input className='cont-submit-input gap' type="text" placeholder='이메일'/>
              </div>
              <div className='cont-submit-text'>
                <h4>상담 내용</h4>
                <textarea className='cont-submit-textbox' name="" id="" placeholder='
                이용목적(플라워 클래스, 직원 복지, 이벤트, 프로모션등)
                예상 일자
                예상 수량
                희망 디자인 및 금액대
                기타문의 사항
                '></textarea>
                <input className='cont-submit-agr' id='agree' type="radio" name="agr" />
                <label htmlFor="agree">동의함</label>
                <input className='cont-submit-agr' id='disagree' type="radio" name="agr" />
                <label htmlFor="disagree">동의안함</label>
                <button className='cont-submit-btn' type='button'>제출하기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}