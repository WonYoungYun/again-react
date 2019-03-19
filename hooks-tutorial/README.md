React Hooks
=

v16.8에 도입된 기능으로서 함수형 컴포넌트에서도 상태관리를 할 수 있는 useState, 그리고 렌더링 후 작업을 할 수 있는 useEffect등의 기능을 제공하여 기존의 함수형 컴포넌트에서 할 수 없었던 다양한 작업을 할 수 있게 해준다.


useState
-

가장 기본적인 Hook으로써 함수형 컴포넌트에서 state를 지닐 수 있게 해준다.

```
import React, {useState} from 'react';

const [value, setValue]  = useState(0);
```
배열 비구조화 할당을 이용해 사용하며, 여기서는 기본값을 0으로 지정해 주었다.  
여러개의 state를 관리하려면, 여러개의 useState를 사용해야 한다.

useEffect
-

리액트 컴포넌트가 렌더링 될 떄 마다 특정 작업을 수행하도록 설정 할 수  있는 Hook, 클래스 컴포넌트의 componentDidMount와 componentDidUpdate가 합친상태라고 생각하면 편하다.
```
useEffect(() => {
    console.log("렌더링 완료")
})
```

마운트 될떄만 실행하고 싶을때는 두번쨰 파라미터에 빈 배열을 넣어준다.
```
useEffect(() => {
    console.log("렌더링 완료")
}, [])
```

특정값이 업데이트 될때만 실행하고 싶을 떄는 클래스형 컴포넌트의 경우
```
componentDidUpdate(prevProps, prevState){
    if(prevProps.value !== this.props.value){
        doing();
    }
}
```
useEffect는 두번쨰 파라미터의 배열에 검사하고 싶은 값을 넣는 것으로 특정 업데이트에만 실행할 수 있게 한다.
```
useEffect(() => {
    console.log("이름변경")
}, [name])
```

만약 컴포넌트가 언마운트되기 전이나, 업데이트 되기 직전에 어떤 작업을 수행하고 싶다면, useEffect에서 뒷정리(cleanup) 함수를 반환해야한다.  
언마운트 되기전에만 호출하고 싶다면 두번째 파라미터에 빈 배열을 넣으면 된다.
```
useEffect(()=>{
    conosle.log("변화")
    return () =>{
        console.log("클린업")
    };
});
```

useContext
-
함수형 컴포넌트에서 Context를 쉽게 사용하게 해줄 수 있는 Hook

userReducer
-
useState보다  컴포넌트에서 더 다양한 상황에따라 다양한 상태를 다른 값으로 업데이트 해주고 싶을 떄 사용하는 Hook  
리듀서는 현재 상태와, 업데이트를 위해 필요한 액션 값을 전달 받아 새로운 상태를 반환하는 함수, 리듀서함수의 상태는 꼭 불변성을 지켜야 한다.
```
function reducer(state, action){
    return {...}; //불변성을 지키면서 업데이트한 새로운 상태를 반환
}
```
액션은 이러한 형태로 이루어진다.
```
{
    type: 'INCREMENT',
    //...
}
```
Redux의 액션 객체는 어떤 액션인지 알려주는 type이 꼭 필요하지만 useReducer에서 사용하는 액션객체는 꼭 type을 지니고 있을 필요가 없다.  
useReducer의 첫번쨰 파라미터는 리듀서 함수, 두번쨰는 해당 리듀서의 기본값을 넣어준다. 이 Hook을 사용하면, state와 dispatch를 받아온다.  
여기서 state는 현재 가르키는 상태이고, dispatch는 액션을 발생시키는 함수이다. dispatch(action)의 형태로 함수안에 파라미터로 액션 값을 넣어 리듀서 함수를 호출한다.  
useReducer의 큰 장점은 컴포넌트 업데이트 로직을 컴포넌트 밖으로 뺄 수 있다는 점이다.


useMemo
-
함수형 컴포넌트 내에서 발생하는 연산을 최적화 할 수 있다.  
useState만을 이용하면 연산할 때만 아니라 인풋내용이 수정될때도 getAverage가 호출되게 된다. useMemo를 통해 연산때에만 호출되게 할 수 있다.  

useRef
함수형 컴포넌트에서 ref를 쉽게 사용할 수 있게 해준다.
