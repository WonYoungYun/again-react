Context API
=

전역적으로 데이터가 사용되어야 할 때 사용된다.  
사용자 로그인 정보, 애플리케이션 설정, 테마, 등  

이런구성을 해보자
```
    App
    /  \
 Left   Right
   |      |
 Sends   Receives
   ^      ^
    \     |
     \    |
     Context
```

Context
-
createContext라는 함수를 사용하여 생성  
호출하면 Provider와 Consumer 컴포넌트가 반환된다. 
Provider는 Context에서 사용할 값을 설정할 떄 사용  
Consumer는 우리가 설정 값을 불러올 떄 사용  

Context는 여러개를 생성할 수 있으며, 여러개의 Context를 사용할 때 이름이 겹치지 않도록 Provider와 Consumer 앞에 prefix를 달아준다.


Provider
-
Context를 사용하기 위해서는  앱을 Provider로 감싸주어야 한다.

Consumer
-
Consumer는 컴포넌트에서 Context를 사용해야 할 때 사용됨.
```
    <SampleConsumer>
        {
            (sample) => (
                <div>
                    현재 설정된 값 : {sample.state.value}
                </div>
            )
        }
    </SampleConsumer>
```
이런식으로도 사용이 가능하다.
```
    {
        ({state}) => (
            <div>
                현재 설정된 값 : {sample.state.value}
            </div>
        )
    }
```

actions 호출하기
-
컴포넌트를 구현하기 위해서는 render만 필요한게 아니라 내부에 있는 메소드도 필요하게 된다. 그래서 render에 consumer를 사용하는 형태가 아니라 컨테이너 컴포넌트를 추가하여 props를 전달하는 방식으로 구현


여러개의 Context
-

Context가 여러개 일때 Provider를 지정해 주려면 다음과 같이 해야한다.
```
return(
        <SampleProvider>
            <AnotherProvider>
                ...
            </AnotherProvider>
        </SampleProvider>
)
```
배열의 내장함수 reduce와 리액트 컴포넌트의 createElement를 활용하여 수정이 가능
```
const AppProvider = ({ contexts, children }) => contexts.reduce(
  (prev, context) => React.createElement(context, {
    children: prev
  }), 
  children
);
```

static contextType
-

v16.6이상에서만 사용가능
static contextType 값을 설정하여 컴포넌트에서 Context를 받아올 수 있다.  

주의해야할 사항 2가지  
1. 클래스 컴포넌트에서만 사용가능
2. 한 컴포넌트에서 단 하나의 Context만 사용가능

src/contexts/another.js   
```
const AnotherContext= createContext();
export default AnotherContext;

```
src/Counter.js
```
static contextType = AnotherContext;

...
this.context.state.number
this.context.actions.increment
```
로 접근이 가능