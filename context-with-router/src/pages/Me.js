import React from 'react';
import { Redirect } from 'react-router-dom';
import { UserConsumer } from '../contexts/UserContext';


const Me = () => {
    return (
        <UserConsumer>
            {({ state }) => {
                //비로그인시 리다이렉트
                if (!state.logged) return <Redirect to="/login" />
                //로그인 시 현재 User 표시
                return (
                    <div>
                        <h1>내 정보</h1>
                        <p>로그인 한 계정: {state.username}</p>
                        <p>
                            로그인을 하면, 어떤 계정인지 보일거고, 안하면 로그인 페이지로 이동합니다.
                        </p>
                    </div>
                );
            }}
        </UserConsumer>
    );
};

export default Me;