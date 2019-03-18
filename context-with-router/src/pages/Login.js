import React from 'react';
import LoginForm from '../components/LoginForm';
import { UserConsumer } from '../contexts/UserContext';


const Login = () => {
    return (
        <div>
            <h1>로그인</h1>
            <p>로그인 화면 입니다.</p>
            <UserConsumer>
                {({ actions }) => <LoginForm onLogin={actions.login} />}
            </UserConsumer>
        </div>
    );
};

export default Login;