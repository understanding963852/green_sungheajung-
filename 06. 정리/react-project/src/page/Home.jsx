import UserContext from "../context/DataContext";
import { useContext } from "react";
import ProductDispaly from "../components/ProductDisplay";
const Home = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>Home입니다</h1>
      <p>{user.state.user}</p>
      <ProductDispaly />
    </div>
  );
};

export default Home;
