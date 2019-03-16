#todo app을 통한 리액트 기본 및 최적화


1. shouldComponentUpdate(nextProps, nextState)를 통해 객체를 내려받은 다음 이전객체와 다음객체를 비교한다.
```
    shouldComponentUpdate(nextProps, nextState) {
    return nextProps.todo !== this.props.todo;
  }
```
2. react-virtualized 를 이용한다.

   - [react-virtualized](https://github.com/bvaughn/react-virtualized)
   - [활용법](https://react-tuts.vlpt.us/01/07d-more-optimize.html)
