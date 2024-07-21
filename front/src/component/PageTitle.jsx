import React from 'react';

/**
 * 페이지 별 메인 타이틀
 */
export function PageMainTitle({title}) {
  return (
    <h2 className='page-title'>{title}</h2>
  );
}

/**
 * 페이지 별 서브 타이틀
 */
export function PageSubTitle({subtitle}) {
  return (
    <h3 className='page-subtitle'>{subtitle}</h3>
  );
}