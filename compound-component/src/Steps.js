import React, { Component } from 'react';

const Step = ({ children, index, currentIndex }) => {
    //index가 일치할때만 보입니다.
    if (index !== currentIndex) return null;
    return children;
};


//this.props.children은 리액트 엘리먼트의 배열로서 각 children배열을 복사해서 사용


//Steps.Stab = () => {};
//이런 식으로 클래스 밖에서도 Namespaced를 선언가능
class Steps extends Component {
    static Step = Step; //Namespaced 컴포넌트 생성
    //내부적으로 라이프사이클 메소드가 필요하면 class형태로 작성
    //클래스 형태로도 설정 가능
    //static Tab = class Tab extends Component{
    //...
    //}

    state = {
        currentIndex: 0
    };
    handleNext = () => {
        this.setState({
            currentIndex: this.state.currentIndex + 1
        });
    };
    handlePrevious = () => {
        this.setState({
            currentIndex: this.state.currentIndex - 1
        });
    };

    render() {
        const { currentIndex } = this.state;
        return (
            <div>
                <h1>회원가입 창</h1>
                <p>못생겼지만, 회원가입 창입니다.</p>
                <hr />
                <section>
                    {/* cloneElement를 통해 step이라는 보이지않는 엘리먼트를 생성 */}
                    {
                        React.Children.map(this.props.children, (step, i) => React.cloneElement(step, {
                            index: i,
                            currentIndex
                        })
                        )}
                </section>
                <hr />
                <button disabled={currentIndex === 0} onClick={this.handlePrevious}>이전</button>
                <button disabled={
                    // this.props.children && 을통해 해당값이 있을때만 확인
                    currentIndex === (this.props.children && this.props.children.length - 1)
                }
                    onClick={this.handleNext}
                >다음</button>
            </div>
        )
    }
}

export default Steps;