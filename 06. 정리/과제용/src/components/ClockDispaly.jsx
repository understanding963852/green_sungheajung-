import { useEffect, useState } from "react"

const Clock = () => {
    const [date, setDate] = useState(new Date());

    const tick = () => {
        setDate(new Date());
    }
    useEffect(() => {
        console.log("마운트가 되었습니다")
        setInterval(() => tick(), 1000);
    },[])

    return (
        <div>
            <h1>{ date.toLocaleTimeString() }</h1>
        </div>
    );
}

export default Clock;