import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export function HomeToCurrentMenu({menu1}) {
  return (
    <p className='home-to-current-menu'>
        <Link to="/" className='go-to-home-button'>
          <FontAwesomeIcon icon={faHouse} />
        </Link>&nbsp;&nbsp;&nbsp;
        <FontAwesomeIcon icon={faChevronRight} />&nbsp;&nbsp; 
        <span className='findid-intro'>{menu1}</span>
    </p>
  );
}

export function HomeToCurrentMenuDetail({menu1, menu2}) {
  return (
    <p className='home-to-current-menu-detail'>
        <Link to="/" className='go-to-home-button'>
          <FontAwesomeIcon icon={faHouse} />
        </Link>&nbsp;&nbsp;&nbsp;
        <FontAwesomeIcon icon={faChevronRight} />&nbsp;&nbsp; 
        <span className='findid-intro'>{menu1}</span>&nbsp;&nbsp;
        <FontAwesomeIcon icon={faChevronRight} />&nbsp;&nbsp;
        <span className='findid-intro'>{menu2}</span>
    </p>
  );
}