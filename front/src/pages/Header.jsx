import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser, faHeadset, faLock, faLockOpen, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { getUser, removeUser } from "../util/localStorage.ts";


export default function Header({ cartCount, refreshCartCount }) {
  const userInfo = getUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeUser();
    refreshCartCount(null);
    alert("로그아웃 되었습니다.");
    navigate("/");
  };

  const handleCheckLogin = (path) => {
    if (userInfo) {
      navigate(`/${path}`);
    } else {
      alert("로그인 후 이용 가능합니다.");
      navigate("/login");
    }
  };

  return (
    <div className="header-overview">
      <div className="header content">
        <div>
          <Link to="/">
            <img
              src="https://snowfoxflowers.com/web/upload/free_design/logo.png"
              alt="header-logo"
            />
          </Link>
        </div>
        <ul className="header-menu">
          <li>
            <Link to="/bestseller">Best Seller</Link>
          </li>
          <li>
            <Link to="/flowers">Flowers</Link>
          </li>
          <li>
            <Link to="/plants">Plants</Link>
          </li>
          <li>
            <Link to="/specialday">Special Day</Link>
          </li>
          <li>
            <Link to="/community/event">Community</Link>
          </li>
          <li>
            <Link to="/etc">Etc</Link>
          </li>
        </ul>
        <ul className="header-sidemenu">
          <li>
            {!userInfo ? <Link to="/login"><FontAwesomeIcon title="로그인" icon={faLockOpen} size="xl" /></Link>
              : <span className="header-btn-logout" onClick={handleLogout}><FontAwesomeIcon title="로그아웃" icon={faArrowRightFromBracket} size="xl" /></span>}
          </li>
          <li onClick={() => handleCheckLogin("mypage")}>
            <Link to="/mypage"><FontAwesomeIcon title="마이페이지" icon={faUser} size="xl" /></Link>
          </li>
          <li onClick={() => handleCheckLogin("mycart")}>
            <Link to="/mycart"><FontAwesomeIcon title="장바구니 보기" icon={faCartShopping} size="xl" />({cartCount})</Link>
          </li>
          {/* <li>
            <Link to="/cs"><FontAwesomeIcon title="고객센터" icon={faHeadset} size="xl" /></Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
}
