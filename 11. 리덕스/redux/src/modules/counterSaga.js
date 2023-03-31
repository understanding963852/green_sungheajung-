// redux-saga를 이용하여 1초뒤에 값이 증가하는 비동기함수 만들기
// redux-saga에서 delay, put 함수를 가져옴
import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";

const INCREASE = "counter/INCREASE";
const DECREASE = "coutner/DECREASE";
const SETDIFF = "counter/SETDIFF";
const DIFF = "counter/DIFF";
// 비동기를 위한 액션 이름 추가
const INCREASE_ASYNC = "counter/INCREASE_ASYNC";
const DECREASE_ASYNC = "coutner/DECREASE_ASYNC";

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const setDiff = (diff) => ({ type: SETDIFF, payload: diff });
export const onDiff = () => ({ type: DIFF });
// 비동기를 위한 액션 생성함수
export const increaseAsync = () => ({ type: INCREASE_ASYNC });
export const decreaseAsync = () => ({ type: DECREASE_ASYNC });

// 제러널함수 생성
function* increaseSaga() {
  //('redux-saga/effects'에서 들고옴)
  yield delay(1000); // 1초 기다림
  yield put(increase()); // put은 액션을 디스패치해줌
}
function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}

// 작성해준 기능이 들어간 제너럴 함수를 어떤식으로 실행할지 내보내는 함수
export function* counterSaga() {
  // takeEvery는 모든 작업 실행
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  // takeLatest는 중복되었을때 마지막 작업만 실행
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

// 초기 상태
const initalState = {
  number: 0,
  diff: 0,
};

// 리듀서 함수 ,상태값을 변화시키는 함수
// 이때 state는 기본값을 넣어서 사용
function counterSagaReducer(state = initalState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        number: state.number + 1,
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - 1,
      };
    case SETDIFF:
      return {
        ...state,
        diff: parseInt(action.payload),
      };
    case DIFF:
      return {
        ...state,
        number: state.number + state.diff,
      };
    default:
      return state;
  }
}

export default counterSagaReducer;
