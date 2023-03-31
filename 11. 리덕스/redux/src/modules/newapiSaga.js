import { call, put, takeLatest } from "redux-saga/effects";
// * 전체를 들고오는 기호
// as 별칭 별명 (전체를 들고올때 어떤 이름으로 들고올지)
// api.getNews()
import * as api from "../api/api";

// 액션타입
const GET_NEWS_START = "newapiSaga/GET_NEWS_START"; // 실행할 사가액션의 이름
const GET_NEWS = "newapiSaga/GET_NEWS"; //로딩유무
const GET_NEWS_SUCCESS = "newapiSaga/GET_NEWS_SUCCESS"; // 성공했을때 값 할당
const GET_NEWS_FAILURE = "newapiSaga/GET_NEWS_FAILURE"; // 실패했을때 오류 할당

// 액션함수
export const getNewsStart = () => ({ type: GET_NEWS_START });

// 제너럴 함수 (사가에서 실행될 함수)
function* getNewsSaga() {
  // 로딩시작
  yield put({ type: GET_NEWS });
  // try catch를 통해서 axios에서 값을 가져옴
  try {
    // saga에서 api를 사용할때는 call을 사용해서 함수를 실행한다. (async-await 대신)
    // call( 실행할 함수(함수로 감싸서) , 함수의 인자값(옵션))
    // api폴더와 파일 따로 만들어서 export 해서 사용 api.newsget
    const response = yield call(api.getNews);
    console.log(response.data.articles);
    yield put({
      type: GET_NEWS_SUCCESS,
      payload: response.data.articles,
    });
  } catch (e) {
    yield put({
      type: GET_NEWS_FAILURE,
      payload: e,
    });
    console.log(e);
  }
  // 성공 : GET_NEWS_SUCCESS로 값 전달
  // 실패 : GET_NEWS_FAILURE로 오류 전달
}

// 작성한 제너럴 함수를 묶어주는 사가
export function* newapiSaga() {
  yield takeLatest(GET_NEWS_START, getNewsSaga);
}

// 초기값
const initalState = {
  loading: {
    GET_NEWS: false,
  },
  news: null,
};

// 리듀서값 작성
const newapiSagaReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        loading: { GET_NEWS: true },
      };
    case GET_NEWS_SUCCESS:
      return {
        ...state,
        loading: { GET_NEWS: false },
        news: action.payload,
      };
    case GET_NEWS_FAILURE:
      return {
        ...state,
        loading: { GET_NEWS: false },
      };
    default:
      return state;
  }
};

export default newapiSagaReducer;
