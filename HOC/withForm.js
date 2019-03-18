import React, { Component } from 'react';

const withForm = (initialForm, resetOnSubmit) => BaseComponent => {
    return class WithForm extends Component {
        state = initialForm || {};
        //컴포넌트에서 사용되는 state는 HOC를 사용할 떄 전달해 줄  initialFrom 값을 사용하도록 했다. 
        //해당값이 없다면 빈객체를 전달

        handleChange = e => {
            const { name, value } = e.target;
            this.setState({
                [name]: value
            });
        };
        //e.target에서 받아오는 input의 name, value값을 참조하여, state에 변화를 주었다.

        handleSubmit = e => {
            e.preventDefault();
            if (this.props.onSubmit) {
                this.props.onSubmit(this.state);
            }
            if (resetOnSubmit) {
                this.setState(initialForm);
            }
        };
        //e.preventDefault를 통해 새로고침을 방지하고,
        //onSubmit props를 받았을 때, 해당 함수에 현재 state를 전달하여 호출해주고, resetOnsubmit이 true이면 state를 초기 상태롤 돌려놓는다.

        render() {
            return (
                <BaseComponent
                    {...this.props}
                    form={this.state}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                />
            );
        }
        //BaseComponent가 원래 받았던 props를 넣어주고, 추가적으로 함수들과 컴포넌트의 state를 props로 전달
    };
};

export default withForm;