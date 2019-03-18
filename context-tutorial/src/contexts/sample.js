import React, { Component, createContext } from 'react';

//Context 생성
const SampleContext = createContext();

//Context안에는 Provider와 Consumer가 존재
//Consumer는 나중에 내보내줄 때 편하도록 SampleConsumer로 설정
const { Provider, Consumer: SampleConsumer } = SampleContext;

//Provider에서 state를 사용하기 위해 컴포넌트 생성
class SampleProvider extends Component {
    state = {
        value: "기본값입니다."
    }

    //여기서 actions라는 객체는 우리가 임의로 설정하는 개체
    //나중에 변화를 일으키는 함수들을 전달할 때 함수 하나한 전달하는 것이 아니라 객체 하나로 한꺼번에 전달하기 위함
    actions = {
        setValue: (value) => {
            this.setState({ value })
        }
    }

    render() {
        const { state, actions } = this;
        //Provider 내에서 사용할 값은 value라고 부른다.
        //현재 컴포넌트의 state와 actions를 넣은 객체를 만들어 Provider의 value값으로 사용
        const value = { state, actions };
        return (
            <Provider value={value}>
                {this.props.children}
            </Provider>
        )
    };
};




//HOC 적용
function useSample(WrappedComponent) {
    return function UseSample(props) {
        return (
            <SampleConsumer>
                {
                    ({ state, actions }) => (
                        <WrappedComponent
                            value={state.value}
                            setValue={actions.setValue}
                        />
                    )
                }
            </SampleConsumer>
        )
    }
}


export {
    SampleProvider,
    SampleConsumer,
    useSample
};