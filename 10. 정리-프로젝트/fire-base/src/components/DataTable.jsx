import { collection, addDoc, getDocs } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase";

const DataTable = () => {
  const [data, setData] = useState("");
  const addData = async () => {
    console.log("눌렀습니다");
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      });
      console.log("실행되었습니다");
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.log("실패");
      console.error("Error adding document: ", e);
    }

    const querySnapshot = await getDocs(collection(db, "users"));
    setData(querySnapshot);
    console.log(typeof data);
    console.log(querySnapshot);
    data.forEach((doc) => {
      console.log("확인");
      console.log(`${doc.id} => ${doc.data()}`);
      console.dir(doc.data());
    });
  };

  return (
    <div>
      <button onClick={addData}>데이터 추가</button>
    </div>
  );
};

export default DataTable;
