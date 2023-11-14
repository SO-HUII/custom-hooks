import { useEffect, useState } from "react";

// use는 리액트에게 이 함수가 커스텀 훅임을 알려주고
// 이는 리액트가 해당 함수를 훅의 규칙에 따라 사용하겠다고 보장해주는 것.
const useCounter = (forwards = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if(forwards) {
                setCounter((prevCounter) => prevCounter + 1);
            } else{
                setCounter((prevCounter) => prevCounter - 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [forwards]);

    return counter;
};

export default useCounter;