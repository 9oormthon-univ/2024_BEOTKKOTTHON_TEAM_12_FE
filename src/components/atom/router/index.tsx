import { Route, Routes } from 'react-router-dom';
import MyPage from '@pages/mypage';
import MainPage from '@pages/main-page';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
};

export default Router;
