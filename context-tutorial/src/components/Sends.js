import React, { Component } from 'react';
import { SampleConsumer, useSample } from '../contexts/sample';

class Sends extends Component {
    state = {
        input: ''
    }
    handleChange = e => {
        this.setState({ input: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        //props로 받은 setValue 호출
        this.props.setValue(this.state.input);
    }
    componentDidMount() {
        //초기값 설정
        this.setState({
            input: this.props.value,
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.input} onChange={this.handleChange} />
                <button type="submit">설정</button>
            </form>
        );
    }
}

//Consumer를 사용하여 context를 전달해준 컨테이너 컴포넌트
// const SendsContainer = () => (
//     <SampleConsumer>
//         {
//             ({ state, actions }) => (
//                 <Sends
//                     value={state.value}
//                     setValue={actions.setValue}
//                 />
//             )
//         }
//     </SampleConsumer>
// )

//Sends 대신에 SendsContainer를 전달해준다.
// export default SendsContainer;
export default useSample(Sends);