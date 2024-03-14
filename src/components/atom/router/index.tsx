import { Route, Routes } from 'react-router-dom';
import MyPage from '@pages/mypage';
import MainPage from '@pages/main-page';
import SalesHistory from '@pages/sales-history';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/mypage/sales-history" element={<SalesHistory />} />
    </Routes>
  );
};

export default Router;
