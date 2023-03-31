import { useEffect, useMemo, useState } from "react";

const TestHook = () => {
  const [date, setDate] = useState(new Date());
  const [num, setNum] = useState([]);
  const [inputnum, setInputnum] = useState(0);

  const onChange = (e) => {
    setInputnum(e.target.value);
  };
  const addNum = () => {
    setNum([...num, parseInt(inputnum)]);
  };

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    // 1초마다 시간 값을 다시 넣어줌
    setInterval(() => tick(), 1000);
  }, []);

  const avrNum = (list) => {
    if (list.length === 0) {
      return 0;
    }
    let sum = 0;
    for (let n of list) {
      sum += n;
    }
    return sum / list.length;
  };

  // 두번째 인자 값이 바뀔 때 마다 함수내용을 실행
  const avr = useMemo(() => avrNum(num), [num]);

  return (
    <div>
      <h1>{date.toLocaleTimeString()}</h1>
      <input type="text" onChange={onChange} />
      <button onClick={addNum}>추가</button>
      <h3>모든 수의 평균 : {avr}</h3>
      <ul>
        {num.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </div>
  );
};
export default TestHook;
