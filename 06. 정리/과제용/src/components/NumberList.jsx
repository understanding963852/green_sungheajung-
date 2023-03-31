import { useState, useMemo } from "react";

const NumberList = () => {
  const [num, setNum] = useState([1, 5, 10]);
  const [inputnum, setInputnum] = useState(0);

  const onChange = (e) => {
    setInputnum(e.target.value);
  };
  const addNum = () => {
    setNum([...num, Number(inputnum)]);
    setInputnum(0);
  };
  const getSum = (num) => {
    if (num.length === 0) return 0;
    console.log("getSum");
    const sum = num.reduce((a, b) => a + b);
    return sum / num.length;
  };
  const sum = useMemo(() => getSum(num), [num]);

  return (
    <div>
      <input type="number" onChange={onChange} value={inputnum} />
      <button onClick={addNum}>추가</button>
      <h3> 모든 수의 평균 : {sum}</h3>
      <ul>
        {num.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </div>
  );
};

export default NumberList;
