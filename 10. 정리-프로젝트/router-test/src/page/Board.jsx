import { useParams } from "react-router-dom";

const Board = () => {
  const params = useParams();
  return <h3>{params.id}페이지입니다</h3>;
};
export default Board;
