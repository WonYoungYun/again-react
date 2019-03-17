import React from 'react';
import qs from 'qs';

export default ({ location }) => {
    const query = qs.parse(location.search.substr(1));
    //substr(1)을 통해 맨앞의 문자인 ? 를 없애준다.
    const detail = query.detail;
    // about?detail=문자열 일떄 문자열을 detail에 담는다.
    //쿼리의 파싱 결과값은 문자열이다.
    return (
        <div>
            <h1>About</h1>
            <p>당신은 이동했습니다. 바로 여기로</p>
            {detail && <p>추가정보 {detail}</p>}
        </div>
    )
}