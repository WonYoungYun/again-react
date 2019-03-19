import { useState, useEffect } from 'react'

export default function usePromise(promiseCreator, deps) {
    const [resolved, setResolved] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const process = async () => {
        setLoading(true);
        try {
            const result = await promiseCreator();
            setResolved(result);

        } catch (err) {
            setError(err);
        }
        setLoading(false);
    };

    useEffect(() => {
        process();
    }, deps);

    return [loading, resolved, error];
}

//프로미스를 생성하는 promiseCreator와 언제 프로미스를 새로만들지 조건을 위한 deps를 받아온다.
//deps는 비어있는 배열이며 , 값을 받아오면 useEffect의 두번쨰 값으로 전달
//useEffect를 사용할 떄 주의할점은 await를 사용하면 안된다는 것이다.
//async를 사용하면 함수가 아닌 프로미스를 반환하기 떄문이다.
