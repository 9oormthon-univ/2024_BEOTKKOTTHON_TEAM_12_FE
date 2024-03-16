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

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/search/result" element={<SearchResult />} />
      <Route path="/product/new" element={<ProductNew />} />
      <Route path="/product/edit" element={<ProductEdit />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/mypage/sales-history" element={<SalesHistory />} />
      <Route path="/mypage/purchase-history" element={<PurchaseHistory />} />
      <Route path="/mypage/account-info" element={<AccountInfo />} />
      <Route path="/mypage/profile-edit" element={<UserProfileEdit />} />
      <Route path="/mypage/blocked-users" element={<BlockedUsers />} />
      <Route path="/chat-home" element={<ChatHome />} />
      <Route path="/chat-detail/:id" element={<ChatDetail />} />
      {/* <Route path="*" element={<div>Not Found</div>} /> */}
    </Routes>
  );
};

export default Router;
