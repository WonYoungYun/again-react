import React, { Component } from 'react';
import './CreateForm.css'
class CreateFrom extends Component {

    state = {
        input: ''
    };

    handleChange = e => {
        this.setState({
            input: e.target.value
        });
    };
    handleSubmit = e => {
        const { onSubmit } = this.props;
        const { input } = this.state;
        e.preventDefault();
        onSubmit(input);
        this.setState({ input: '' });
    }
    render() {
        const { input } = this.state;
        return (
            <form className="CreateForm" onSubmit={this.handleSubmit}>
                <input placeholder="오늘 뭐하지?" onChange={this.handleChange} value={input}></input>
                <button type="submit">등록</button>
            </form>
        )
    }
}

export default CreateFrom;