import "./css/style.css";
import Home from "./pages/Home.jsx";
import Root from "./pages/Root.jsx";
import BestSeller from "./component/BestSeller.jsx";
import Flowers from "./component/Flowers.jsx";
import Plants from "./component/Plants.jsx";
import SpecialDay from "./component/SpecialDay.jsx";
import Community from "./component/Community.jsx";
import Etc from "./component/Etc.jsx";
import Cs from "./component/Cs.jsx";
import MyCart from "./component/MyCart.jsx";
import Mypage from "./component/mypage/Mypage.jsx";
import Login from "./component/login/Login.jsx";
import NonMemberOrderInquiry from "./component/login/NonMemberOrderInquiry.jsx";
import FindId from "./component/login/FindId.jsx";
import FindPassword from "./component/login/FindPassword.jsx";
import Signup from "./component/signup/Signup.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./css/woong.css";
import "./css/login.css";
import "./css/mypage.css";
import "./css/signup.css";
import MemberOrderInquiry from "./component/mypage/MemberOrderInquiry.jsx";
import EditMemberInfo from "./component/mypage/EditMemberInfo.jsx";
import ProductOfInterest from "./component/mypage/ProductOfInterest.jsx";
import PostManagement from "./component/mypage/PostManagement.jsx";
import PersonalConsult from "./component/mypage/PersonalConsult.jsx";
import SignupStep2 from "./component/signup/SignupStep2.jsx";
import ProductDetail from "./component/ProductDetail.jsx";
import FindeIdComplete from "./component/login/FindeIdComplete.jsx";
import FindPasswordComplete from "./component/login/FindPasswordComplete.jsx";
import SubscriptProduct from "./component/etc/SubscriptProduct.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { getUser } from "./util/localStorage.ts";

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const userInfo = getUser();

  // 1. 로그인 여부 체크
  // 2. 로그인한 경우, 회원아이디로 cartCount 가져오기
  useEffect(() => {
    if (userInfo) {
      const url = `http://127.0.0.1:3001/cart/cartCount`;
      axios({
        method: "post",
        url: url,
        data: { userId: userInfo.userId },
      })
        .then((rst) => setCartCount(parseInt(rst.data.count)))
        .catch((error) => console.log(error));
    }
  }, [])

  const addCartCount = (result) => {
    setCartCount(cartCount + result);
  };

  const refreshCartCount = (userInfo) => {
    if (userInfo) {
      const url = `http://127.0.0.1:3001/cart/cartCount`;
      axios({
        method: "post",
        url: url,
        data: { userId: userInfo.userId },
      })
        .then((rst) => setCartCount(parseInt(rst.data.count)))
        .catch((error) => console.log(error));
    } else {
      setCartCount(0);
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root cartCount={cartCount} refreshCartCount={refreshCartCount} />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/bestseller", element: <BestSeller /> },
        { path: "/flowers", element: <Flowers /> },
        { path: "/plants", element: <Plants /> },
        { path: "/specialday", element: <SpecialDay /> },
        // community 관련 path
        { path: "/community", element: <Community /> },
        // community => event
        { path: "/community/event", element: <Community communityId="event" /> },
        { path: "/community/event/:id", element: <Community communityId="event" communityDetail="eventDetail" /> },
        // community => review
        { path: "/community/review", element: <Community communityId="review" /> },
        // community => faq
        { path: "/community/faq", element: <Community communityId="faq" /> },
        // community => qna
        { path: "/community/qna", element: <Community communityId="qna" /> },
        { path: "/community/qna/write", element: <Community communityId="qna" communityDetail="qnaWrite" /> },
        { path: "/community/qna/:id", element: <Community communityId="qna" communityDetail="qnaDetail" /> },

        { path: "/etc", element: <Etc id="intro" /> },
        { path: "/cs", element: <Cs /> },
        { path: "/mycart", element: <MyCart addCartCount={addCartCount} /> },

        // login 관련 path
        { path: "/login", element: <Login refreshCartCount={refreshCartCount} /> },
        { path: "/login/nonmemberorderinquiry", element: <NonMemberOrderInquiry /> },
        { path: "/login/findid", element: <FindId /> },
        { path: "/login/findpassword", element: <FindPassword /> },
        { path: "/login/findid/complete", element: <FindeIdComplete /> },
        { path: "/login/findpassword/complete", element: <FindPasswordComplete /> },

        // mypage 관련 path
        { path: "/mypage", element: <Mypage refreshCartCount={refreshCartCount}/> },
        { path: "/mypage/memberorderinquiry", element: <MemberOrderInquiry /> },
        { path: "/mypage/editmemberinfo", element: <EditMemberInfo /> },
        { path: "/mypage/productofinterest", element: <ProductOfInterest /> },
        { path: "/mypage/postmanagement", element: <PostManagement /> },
        { path: "/mypage/personalconsult", element: <PersonalConsult /> },

        // signup 관련 path
        { path: "/signup", element: <Signup /> },
        { path: "/signup/complete", element: <SignupStep2 /> },

        // product 관련 path
        { path: "/productdetail/:id", element: <ProductDetail addCartCount={addCartCount} /> },

        // etc 관련 path
        { path: "/etc/intro", element: <Etc id="intro" /> },
        { path: "/etc/store", element: <Etc id="store" /> },
        { path: "/etc/subscript", element: <Etc id="subscript" /> },
        { path: "/etc/contact", element: <Etc id="contact" /> },
        { path: "/SubscriptProduct", element: <SubscriptProduct /> }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
