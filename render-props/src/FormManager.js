import React, { Component } from 'react';

class FormManager extends Component {
    static defaultProps = {
        initialForm: {}//없으면 빈객체 사용
    };
    constructor(props) {
        super(props);
        this.state = props.initialForm;
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        if (this.props.resetOnSubmit) {
            this.setState(
                this.props.initialForm
            )
        }
    };
    render() {
        return this.props.children({
            form: this.state,
            onChange: this.handleChange,
            onSubmit: this.handleSubmit
        })
    };

};

export default FormManager;