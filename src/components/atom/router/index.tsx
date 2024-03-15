import { Route, Routes } from 'react-router-dom';
import MyPage from '@pages/mypage';
import MainPage from '@pages/main-page';
import SalesHistory from '@pages/sales-history';
import SearchPage from '@pages/search-page';
import SearchResultPage from '@pages/search-result-page';
import PurchaseHistory from '@pages/purchase-history';
import ProductNewPage from '@pages/product-new-page';
import AccountInfo from '@pages/account-info';
import UserProfileEdit from '@pages/user-profile-edit';
import ProductDetailPage from '@pages/product-detail-page';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/search/result" element={<SearchResultPage />} />
      <Route path="/product/new" element={<ProductNewPage />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/mypage/sales-history" element={<SalesHistory />} />
      <Route path="/mypage/purchase-history" element={<PurchaseHistory />} />
      <Route path="/mypage/account-info" element={<AccountInfo />} />
      <Route path="mypage/profile-edit" element={<UserProfileEdit />} />
      {/* <Route path="*" element={<div>Not Found</div>} /> */}
    </Routes>
  );
};

export default Router;
