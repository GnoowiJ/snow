import React from 'react';
import { HomeToCurrentMenuDetail } from '../HomeToCurrentMenu.jsx';
import { PageMainTitle } from '../PageTitle';

export default function ProductOfInterest() {
  return (
    <div className='content'>
      <HomeToCurrentMenuDetail menu1={'마이쇼핑'} menu2={'관심상품'}/>
      <PageMainTitle title={'관심상품'} />
      <div className='interest-product-history-box'>
        <div className='interest-product-history'>
          <p>관심상품 내역이 없습니다.</p>
        </div>
      </div>
    </div>
  );
}