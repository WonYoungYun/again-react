immer.js
=

React랑 같이쓰면 좋은 불변성라이브러리,

불변성을 유지하는 이유,
shouldComponentUpdate 같은걸로 편하게 접근가능,

불변성을 유지하지 않고 기존 배열을 바꿧다면, 비교하기가 어려워진다.


```
out:{
    in:{
        deep:{
            a: 0, 
            b:1
        },
        c: 2,
    },
    d:3,
}
```
일 경우, b를 변경하려면
```
this.setState({
    out:{
        ...this.state.out,
        in:{
            ...this.state.in,
            deep:{
                ...this.state.deep,
                b : 10
            }
        }
    }
}),

```
이런식으로 변경이 이루어져야한다.

immer 적용하기
-
```
yarn add immer
```
immer를 설치
```
import React, {Component} from 'react;
import produce from 'immer';
```
상단에 적용

```
  handleKeyPress = e => {
    if (e.key !== 'Enter') return;
    this.setState({
      textList: {
        input: '',
        list: this.state.textList.list.concat({
          id: ++this.id, // 추가 할 때마다 기존 id 에 1 더해서 설정
          text: this.state.textList.input
        })
      }
    });
  };
```
이런 코드를
```
  handleKeyPress = e => {
    if (e.key !== 'Enter') return;
    this.setState(
      produce(draft => {
        draft.textList.input = '';
        draft.textList.list.push({
          id: ++this.id,
          text: this.state.textList.input
        });
      })
    );
  };
```
이런식으로 바꿔 줄 수 있다.