import { Route, Routes } from 'react-router-dom';
import MyPage from 'pages/mypage';
import Main from 'pages/main';
import SalesHistory from 'pages/sales-history';
import SearchPage from 'pages/search';
import SearchResult from 'pages/search-result';
import PurchaseHistory from 'pages/purchase-history';
import ProductNew from 'pages/product-new';
import AccountInfo from 'pages/account-info';
import UserProfileEdit from 'pages/user-profile-edit';
import BlockedUsers from 'pages/blocked-users';
import ProductDetail from 'pages/product-detail';
import ChatHome from 'pages/chat-home';
import ProductEdit from 'pages/product-edit';
import ChatDetail from 'pages/chat-detail';
import Magazine from 'pages/magazine';
import QuizPage from 'pages/quiz/quiz';
import Login from 'pages/login';
import Onboarding from 'pages/onboarding';
import SignIn from 'pages/signup';
import StudentCertification from 'pages/student-certification';
import Donation from 'pages/donation';
import DonationSelect from 'pages/donation-select';
import DonationNotice from 'pages/donation-notice';
import DonationFormBasic from 'pages/donation-form-basic';
import DonationFormRequest from 'pages/donation-form-request';
import DonationFinish from 'pages/donation-finish';
import DonationHistory from 'pages/donation-history';
import LevelInfo from 'pages/level-info';
import DonationVisit from 'pages/donation-visit';
import DonationHomeless from 'pages/donation-homeless';

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
      <Route path="/donation" element={<Donation />} />
      <Route path="/donation/select" element={<DonationSelect />} />
      <Route path="/donation/notice" element={<DonationNotice />} />
      <Route path="/donation/form-basic" element={<DonationFormBasic />} />
      <Route path="/donation/form-request" element={<DonationFormRequest />} />
      <Route path="/donation/finish" element={<DonationFinish />} />
      <Route path="/donation/visit" element={<DonationVisit />} />
      <Route path="/donation/homeless" element={<DonationHomeless />} />

      {/* <Routes path="*" element={<div>Not Found</div>} /> */}
    </Routes>
  );
};

export default Router;
