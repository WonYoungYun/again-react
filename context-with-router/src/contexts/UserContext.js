import React, { Component, createContext } from 'react';

//Context 생성
const UserContext = createContext();

//UserContext 안에 있는 Consumer를 UserConsumer로 리네임
//Provider는 하단에서 UserProvider로 만든다.
const { Provider, Consumer: UserConsumer } = UserContext;

//사용자 계정정보 생성,
const users = [
    {
        id: 1,
        username: 'react',
        password: 'good',
    },
    {
        id: 2,
        username: 'context',
        password: 'fun'
    },
];

class UserProvider extends Component {
    //UserProvider에서 다룰 상태
    state = {
        logged: false,//현재 로그인 상태
        username: null, //로그인 중인 사용자명
    };
    //UserProvider에서 다룰 액션 함수

    constructor(props) {
        super(props);
        // ******만약 localstorage가 없는환경(SSR)이면 진행하지않음
        if (typeof localStorage === 'undefined') return;
        //유저를 로컬스토리지에서 가져옴
        const user = localStorage.getItem('user');

        if (user) {
            try {
                //파싱 시도
                const parsed = JSON.parse(user);
                //파싱문제없으면 state에 반영
                this.state = {
                    logged: true,
                    username: parsed.username,
                };
            } catch (err) {
                console.error(err);
            }
        }
    }

    actions = {
        //로그인 함수
        login: form => {
            const { username, password } = form;
            const user = users.find(u => u.username === username);

            //유저가 존재하지 않거나 비밀번호가 틀리다면
            if (!user || user.password !== password) {
                return false;//실패처리
            }

            //성공시 state를 업데이트
            this.setState({
                logged: true,
                username,
            });

            //유저정보를 로컬스토리지에 저장
            localStorage.setItem('user', JSON.stringify(user));

            return true;//성공 반환
        },
        logout: () => {
            //로그아웃시 상태를 초기화합니다.
            this.setState({
                logged: false,
                username: null,
            });
            //로컬스토리지에 저장된 기존 값을 날린다.
            localStorage.removeItem('user');
        },
    }
    render() {
        //편의 상 value를 만들어 JSX를 작성하기 전 Context에서 사용할 값을 넣어준다.
        const value = {
            state: this.state,
            actions: this.actions
        };

        //Provider에게 value를 전달
        return (
            <Provider value={value}>{this.props.children}</Provider>
        )
    }
}


//만든 Consumer와 Provider를 내보낸다.
export { UserConsumer, UserProvider };