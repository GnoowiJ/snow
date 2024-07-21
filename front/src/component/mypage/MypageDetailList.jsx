import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faAddressCard, faGift, faFilePen, faHeadset, faPercent, faPiggyBank, faTruck, faBox, faCalendar } from '@fortawesome/free-solid-svg-icons';
import '../../css/mypage.css';

export default function MypageDetailList() {
  const [mypageDetailList, setMyPageDetailList] = useState([]);

  useEffect(()=>{
    axios('data/mypagedetail.json')
      .then(result => setMyPageDetailList(result.data))
      .catch(error => console.log(error))
  }, []);

  console.log('mypageDetailList ==>', mypageDetailList);

  // mypagedatail.json의 아이콘과 매핑
  const iconList = new Map();
  iconList.set("glass", faMagnifyingGlass);
  iconList.set("card", faAddressCard);
  iconList.set("gift", faGift);
  iconList.set("pen", faFilePen);
  iconList.set("headset", faHeadset);
  iconList.set("percent", faPercent);
  iconList.set("bank", faPiggyBank);
  iconList.set("truck", faTruck);
  iconList.set("box", faBox);
  iconList.set("calendar", faCalendar);

  // mypagedetail 출력리스트 설정
  const rows = [];
  for (let i = 0; i < mypageDetailList.length; i += 5 ){
    rows.push(mypageDetailList.slice(i, i+5))
  }

  return (
    <table border={1} className="mypage-detail-table">
      {rows.map((rowArray, index) => (
        <tr>
          {rowArray.map(row => (
            <td key={index} className="mypage-detail-box">
                <Link to={row.path}>
                  <FontAwesomeIcon icon={iconList.get(row.icon)} 
                                    size={row.size}/>
                  <p className="mypage-detail-subtitle-en">{row.etitle}</p>
                  <p className="mypage-detail-subtitle-ko">{row.ktitle}</p>
                  <p className="mypage-detail-desc">{row.desc}</p>
                </Link>
            </td>
          ))}
        </tr>
      ))}
    </table>
  );
}