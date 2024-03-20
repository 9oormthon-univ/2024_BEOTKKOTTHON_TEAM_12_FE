import { Route, Routes } from 'react-router-dom';
import MyPage from '@pages/mypage';
import Main from '@pages/main';
import SalesHistory from '@pages/sales-history';
import SearchPage from '@pages/search';
import SearchResult from '@pages/search-result';
import PurchaseHistory from '@pages/purchase-history';
import ProductNew from '@pages/product-new';
import AccountInfo from '@pages/account-info';
import UserProfileEdit from '@pages/user-profile-edit';
import BlockedUsers from '@pages/blocked-users';
import ProductDetail from '@pages/product-detail';
import ChatHome from '@pages/chat-home';
import ProductEdit from '@pages/product-edit';
import ChatDetail from '@pages/chat-detail';
import Magazine from '@pages/magazine';
import QuizPage from '@pages/quiz/quiz';
import Login from '@pages/login';
import Onboarding from '@pages/onboarding';
import Donation from '@pages/donation';
import DonationSelect from '@pages/donation-select';
import DonationNotice from '@pages/donation-notice';
import DonationFormBasic from '@pages/donation-form-basic';
import DonationFormRequest from '@pages/donation-form-request';

const Router = () => {
  return (
    <Routes>
      {/*로그인 회원가입*/}
      <Route path="/login" element={<Login />} />

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

      {/* 채팅 */}
      <Route path="/chat-home" element={<ChatHome />} />
      <Route path="/chat-detail/:id" element={<ChatDetail />} />

      {/* 매거진 */}
      <Route path="magazine" element={<Magazine />} />
      <Route path="magazine/quiz" element={<QuizPage />} />

      {/* 기부 */}
      <Route path="/donation" element={<Donation />} />
      <Route path="/donation/select" element={<DonationSelect />} />
      <Route path="/donation/notice" element={<DonationNotice />} />
      <Route path="/donation/form-basic" element={<DonationFormBasic />} />
      <Route path="/donation/form-request" element={<DonationFormRequest />} />

      {/* <Routes path="*" element={<div>Not Found</div>} /> */}
    </Routes>
  );
};

export default Router;
