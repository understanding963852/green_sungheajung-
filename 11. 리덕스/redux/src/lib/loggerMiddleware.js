// lib : 라이브러리를 모아두는 파일
// loggerMiddleware : 디스패치가 실행될때 log 를 남기는 미들웨어
// 미들웨어를 사용하는 이유 : 램던하게 바뀌는 값, 날짜값, 비동기(axios)를 사용하기위함

// store :  리덕스에서 가져온 store(state와 dispatch)
// action : dispatch된 액션
// next :  dispatch 로 넘겨주는 역할
const loggerMiddleware = (store) => (next) => (action) => {
  // 미들웨어의 기본구조
  // 액션의 상태를 남기는 logger
  console.group(action && action.type);
  console.log("이전상태", store.getState());
  console.log("액션", action);
  next(action);
  console.log("다음상태", store.getState());
  console.groupEnd();
};

export default loggerMiddleware;

/*
 * 위의 내용을 풀어서 작성한 모습
const loggerMiddleware = function loggerMiddleware(store) {
    return function (next) {
        return function (action) {
            // 미들웨어의 기본구조
        }
    }
}
*/
