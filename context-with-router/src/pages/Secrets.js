import React from 'react';
import { Redirect } from 'react-router-dom';
import { UserConsumer } from '../contexts/UserContext';

const Secrets = () => {
    return (
        <div>
            <UserConsumer>
                {({ state }) => {
                    //state.logged를 확인하고 false면 리다이렉트
                    if (!state.logged) return <Redirect to="/login" />;
                    return null;//true일떈 그냥 null 반환

                }}
            </UserConsumer>
            <h1>비밀화면</h1>
            <p>이 페이지는 로그인을 해야 접근이 가능합니다.</p>
        </div>
    )
}

export default Secrets;