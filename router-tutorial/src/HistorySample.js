import React, { Component } from 'react';

class HistorySample extends Component {
    //뒤로가기
    handleGoBack = () => {
        this.props.history.goBack();
    };

    //홈으로 이동
    handleGoHome = () => {
        this.props.history.push('/home');
    };
    handleClick = () => {
        console.log("click")
    }
    componentDidMount() {
        //이걸 설정하고 나면 페이지에 변화가 생기려고 할 때 마다, 질문합니다.
        this.unblock = this.props.history.block('정말 나갑니까?')
    }

    componentWillUnmount() {
        //컴포넌트가 언마운트되면 그만 물음,
        if (this.unblock) {
            this.unblock();
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.handleGoBack}>뒤로</button>
                <button onClick={this.handleGoHome}>홈으로</button>
                <button onClick={this.handleClick}>클릭</button>
            </div>
        );
    }
}
export default HistorySample;