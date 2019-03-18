import React, { Component, Suspense } from 'react';
// import withSplitting from './withSplitting';

//withSplitting을 만들어 state에 만들어 관리하지 않아도 된다.
// const SplitMe = withSplitting(() => import('./SplitMe'))
const SplitMe = React.lazy(() => import('./SplitMe'));


class App extends Component {
  state = {
    // SplitMe: null,
    visible: false,
  };
  handleClick = () => {
    // import('./SplitMe').then(result => {
    //   this.setState({
    //     SplitMe: result.default
    //   });
    // });
    this.setState({
      visible: true,
    })
  };
  render() {
    const { visible } = this.state;
    return (
      <div className="App">
        <button onClick={this.handleClick}>클릭!</button>
        {/* {visible && <SplitMe />} */}
        {visible && (
          <Suspense fallback={<div>로딩중입니다.</div>}>
            <SplitMe />
          </Suspense>

        )}
      </div>
    );
  }
}
//단순히 렌더링만 해주는 것으로 렌더링 되는 시점에서 자동으로 스플리팅된 파일이 로딩되는 것을 확인 할 수 있다.

export default App;
