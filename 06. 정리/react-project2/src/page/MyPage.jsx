import UserContext from "../context/DataContext";
import { useContext } from "react";

const MyPage = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <p>{user.state.user}</p>
    </div>
  );
};

export default MyPage;
