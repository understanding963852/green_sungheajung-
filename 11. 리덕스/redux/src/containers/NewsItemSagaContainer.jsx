import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsItem from "../components/NewsItem";
import { getNewsStart } from "../modules/newapiSaga";

const NewsItemSagaContainer = () => {
  const { loadingNews, news } = useSelector((state) => ({
    loadingNews: state.newapiSagaReducer.loading.GET_NEWS,
    news: state.newapiSagaReducer.news,
  }));

  const dispatch = useDispatch();

  const GetNews = useCallback(() => dispatch(getNewsStart()), [dispatch]);

  // 마운트될때 실행하기 위해서 useEffect 사용
  useEffect(() => {
    GetNews(); // 비동기 함수 - setTimer?
    console.log("useEffect 실행"); // 동기
  }, [GetNews]);

  return <NewsItem news={news} loadingNew={loadingNews} />;
};
export default NewsItemSagaContainer;
