LifeCycle API
=

리액트의 LifeCycleAPI는 컴포넌트가 브라우저에서 생성되거나 수정되거나 사라질떄 호출되는 API이다.

컴포넌트 초기 생성
=

constructor
-
```
constructor(props){
    super(props);
}
```
 컴포넌트 생성자 함수, 컴포넌트가 생성될 떄 마다 호출된다.

componentDidMount
-
화면에 나타나게 되었을 때 호출, D3, masonry처럼 DOM을 사용해야하는 외부라이브러리 연동을 하거나, 컴포넌트에서 필요로하는 데이터를 요청하기 위해 axios, fetch를 통해 ajax요청을 하거나  DOM의 속성을 읽거나 직접 변경하는 작업을 한다.

컴포넌트 업데이트
=

컴포넌트의 업데이트는 props와 state의 변화에 따라 결정된다.

static getDerivedStateFromProps()
-
v16.3 이후에 만들어진 라이프사이클 API로, props로 받아온 값을 state로 동기화 하는 작업을 해줘야 하는 경우 사용,
```
static getDerivedStateFromProps(nextProps, prevState){
    //if(nextProps.value !== prevState.value){
        return {value: nextProps.value};
    }
    return null; //null을 리턴하면 업데이트 할 것이 없다는 의미
}
```

shouldComponentUpdate
-
현재 컴포넌트의 상태가 업데이트 되지 않아도 부모 컴포넌트가 리렌더링되면 자식도 리렌더링 된다. 여기서 렌더링이란 render()함수가 호출된다는 것을 의미,
변화가없다면 DOM조작을 하진 않지만, 쓸대없는 낭비를 줄이기 위해 사용할 수 있다.
```
shouldComponentUpdate(nextProps, nextState){
    //return false일 경우 업데이트 하지 않음,
    //return this.props.checked !== nextProps.checked
    return true;
}
```

getSnapshotBeforeUpdate()
-
1. render()
2. getSnapshotBeforeUpdate()
3. 실제 DOM에 변화발생
4. componentDidUpdate
   이 API를 통해 DOM의 변화가 일어나기 직전의 DOM상태를 가져오고, 여기서 리턴하는 값은 componentDidUpdate에서 3번쨰 파라미터로 받아올 수 있다.

componentDidUpdate()
-
```
componentDidUpdate(prevProps, prevState, snapshot)
```
render()를 호출하고 난 다음 발생, 이 시점에서는 props와 state가 변경되어있다. 그리고 파라미터를 통해 prevProps와 prevState를 조회할 수 있다.

컴포넌트 제거
=

컴포넌트가 필요하지 않게 되면 단 하나의 API가 호출된다.

componentWillUnmount
-
```
componentWillUnmount(){
    //이벤트, setTimeout, 외부 라이브러리 인스턴스 제거,
}
```
주로 등록했던 이벤트를 제거하고, 만약 setTimeout이 있다면 clearTimeout을 통해 제거한다. 외부라이브러리의 dispose기능이있다면 여기에 호출한다.


컴포넌트 에러
=

componentDidCatch
-
```
componentDidCatch(error, info){
    this.setState({
        error:true
    });
}
```
자신의 render함수 에러는 잡을 수 없지만, 자식 컴포넌트의 내부에서 발생하는 에러를 잡을 수 있다.

에러발생이유(자주)
1. 존재하지 않는 함수를 호출하려 할떄
2. 배열이나 객체가 올줄 알았는데 객체와 배열이 존재하지 않을때
   
```
render() {
  if (!this.props.object || !this.props.array || this.props.array.length ===0) return null;
  // object 나 array 를 사용하는 코드
}
```
```
class Sample extends Component {
    //defaultProps를 통한 props값 초기설정,
  static defaultProps = {
    onIncrement: () => console.warn('onIncrement is not defined'),
    object: {},
    array: []
  }
}
```
이러한 방식으로 막아줄 수 있다.