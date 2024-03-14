import { Route, Routes } from 'react-router-dom';
import MyPage from '../../../pages/mypage';

const Router = () => {
  return (
    <Routes>
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
};

export default Router;
