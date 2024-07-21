import React, { useState } from "react";
import Intro from "./etc/Intro.jsx"
import Store from "./etc/Store.jsx"
import Subscript from "./etc/Subscript.jsx"
import Contact from "./etc/Contact.jsx"
import "../css/etc.css"
import { Link } from "react-router-dom"

export default function Etc({id}) {
  // const [showPage, setShowPage] = useState('intro')
  const [showPage, setShowPage] = useState(id)

  const handlePage = (e) => {
    setShowPage(e.target.id)
  }

  const pages = () => {
    if (showPage === 'intro') return <Intro />
    else if (showPage === 'store') return <Store />
    else if (showPage === 'subscript') return <Subscript />
    else if (showPage === 'contact') return <Contact />
  }

  return (
    <div>
      <div>
        <img className="etc-main-img" src="../images/etc.png" alt="" />
      </div>
      <div className="etc-menu-box">
        <ul className="etc-menu-list">
          <li className="etc-menu-content">
            <Link id="intro" onClick={handlePage} className="link" to="/etc/intro">
            기업소개
            </Link>
          </li>
          <li>
            <Link id="store" onClick={handlePage} className="link" to="/etc/store" >
            찾아오는 길
            </Link>
          </li>
          <li>
            <Link id="subscript" onClick={handlePage} className="link" to="/etc/subscript">
            정기구독
            </Link>
          </li>
          <li>
            <Link id="contact" onClick={handlePage} className="link" to="/etc/contact">
            기업제휴
            </Link>
          </li>
        </ul>
      </div>
      <div>
        {pages()}
      </div>
    </div>
    
  );
}
