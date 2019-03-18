import React, { Component } from 'react';
import withForm from './withForm';

const LoginForm = ({ form, onChange, onSubmit }) => {
    const { username, password } = form;
    return (
        <form className="LoginForm" onSubmit={onSubmit}>
            <input
                onChange={onChange}
                value={username}
                name="username"
                placeholder="계정"
            />
            <input
                onChange={onChange}
                value={password}
                name="password"
                type="password"
                placeholder="비밀번호"
            />
            <button>로그인</button>
        </form>
    );
};

export default withForm({ username: '', password: '' }, true)(LoginForm);