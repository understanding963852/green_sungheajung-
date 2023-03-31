import { Navigate } from "react-router-dom";

const MyPage = () => {
  const isLogin = false;

  if (!isLogin) {
    // Navigate를 이용해서 다른 컴포넌트로 이동
    // 리다이렉트
    return <Navigate to="/" replace={true}></Navigate>;
  }
  return <div>마이페이지</div>;
};

export default MyPage;
