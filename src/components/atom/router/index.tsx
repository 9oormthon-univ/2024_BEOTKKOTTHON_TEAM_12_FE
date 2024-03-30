import { Route, Routes } from 'react-router-dom';
import MyPage from 'pages/myPagePage/mypage';
import Main from 'pages/productPage/main';
import SalesHistory from 'pages/myPagePage/sales-history';
import SearchPage from 'pages/searchPage/search';
import SearchResult from 'pages/searchPage/search-result';
import PurchaseHistory from 'pages/myPagePage/purchase-history';
import ProductNew from 'pages/productPage/product-new';
import AccountInfo from 'pages/myPagePage/account-info';
import UserProfileEdit from 'pages/myPagePage/user-profile-edit';
import BlockedUsers from 'pages/myPagePage/blocked-users';
import ProductDetail from 'pages/productPage/product-detail';
import ChatHome from 'pages/chat-home';
import ProductEdit from 'pages/productPage/product-edit';
import ChatDetail from 'pages/chat-detail';
import Magazine from 'pages/magazinePage/magazine';
import QuizPage from 'pages/magazinePage/quiz/quiz';
import Login from 'pages/login';
import Onboarding from 'pages/onboarding';
import SignIn from 'pages/signup';
import StudentCertification from 'pages/student-certification';
import DonationMain from 'pages/donationPage/main';
import DonationSelectGroup from 'pages/donationPage/select-group';
import DonationNotice from 'pages/donationPage/notice';
import DonationBasicForm from 'pages/donationPage/basic-form';
import DonationRequestForm from 'pages/donationPage/request-form';
import DonationFinishForm from 'pages/donationPage/finish-form';
import DonationHistory from 'pages/myPagePage/donation-history';
import LevelInfo from 'pages/myPagePage/level-info';
import DonationInpersonVisit from 'pages/donationPage/inperson-visit';
import DonationHomeless from 'pages/donationPage/homeless';
import DonationHomelessMap from 'pages/donationPage/homeless-map';

const Router = () => {
  return (
    <Routes>
      {/*로그인 회원가입*/}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignIn />} />

      {/*재학생 인증 페이지 */}
      <Route path="/student-certification" element={<StudentCertification />} />

      {/* 온보딩 */}
      <Route path="/" element={<Onboarding />} />

      {/* 중고 거래 */}
      <Route path="/product" element={<Main />} />
      <Route path="/product/new" element={<ProductNew />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/product/edit/:id" element={<ProductEdit />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/search/result" element={<SearchResult />} />

      {/* 마이페이지 */}
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/mypage/sales-history" element={<SalesHistory />} />
      <Route path="/mypage/purchase-history" element={<PurchaseHistory />} />
      <Route path="/mypage/account-info" element={<AccountInfo />} />
      <Route path="/mypage/profile-edit" element={<UserProfileEdit />} />
      <Route path="/mypage/blocked-users" element={<BlockedUsers />} />
      <Route path="/mypage/profile-edit" element={<UserProfileEdit />} />
      <Route path="/mypage/blocked-users" element={<BlockedUsers />} />
      <Route path="/mypage/donation-history" element={<DonationHistory />} />
      <Route path="/mypage/level-info" element={<LevelInfo />} />

      {/* 채팅 */}
      <Route path="/chat-home" element={<ChatHome />} />
      <Route path="/chat-detail" element={<ChatDetail />} />

      {/* 매거진 */}
      <Route path="magazine" element={<Magazine />} />
      <Route path="magazine/quiz" element={<QuizPage />} />

      {/* 기부 */}
      <Route path="/donation" element={<DonationMain />} />
      <Route path="/donation/select" element={<DonationSelectGroup />} />
      <Route path="/donation/notice" element={<DonationNotice />} />
      <Route path="/donation/form-basic" element={<DonationBasicForm />} />
      <Route path="/donation/form-request" element={<DonationRequestForm />} />
      <Route path="/donation/finish" element={<DonationFinishForm />} />
      <Route path="/donation/visit" element={<DonationInpersonVisit />} />
      <Route path="/donation/homeless" element={<DonationHomeless />} />
      <Route path="/donation/homeless/map" element={<DonationHomelessMap />} />

      {/* <Routes path="*" element={<div>Not Found</div>} /> */}
    </Routes>
  );
};

export default Router;
