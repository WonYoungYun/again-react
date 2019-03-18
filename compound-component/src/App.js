import React, { Component } from 'react';
import Steps from './Steps';

class App extends Component {
  render() {
    return (
      <Steps>
        <Steps.Step>
          <h2>약관 동의</h2>
          <p>여기서는 약관 동의를 받는다.</p>
        </Steps.Step>
        <Steps.Step>
          <h2>가입 양식</h2>
          <p>아이디, 이메일, 기본적 정보</p>
        </Steps.Step>
        <Steps.Step>
          <h2>추가 정보</h2>
          <p>필수가 아닌 정보들을 더 받는다.</p>
        </Steps.Step>
        <Steps.Step>
          <h2>환영</h2>
          <p>이러한 흐름을 따르면 된다.</p>
        </Steps.Step>
      </Steps>
    );
  }
}

export default App;
