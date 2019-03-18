Higher-Order Component(HOC)
=
로직이 반복되는 경우
반복되는 로직을 재사용할 수 있게 만들어 준다.

```
import React, {Component} from 'react';

//옵션이 필요없는 경우 생략가능
//const withSomething = (BaseComponent) => {

const withSomething = (options) => (BaseComponent) =>{
    return class WithSomething extends Component{
        render(){
            retrun(<BaseComponent {...this.props} somethingExtra={1}/>)
        }
    }
}

export default withSomething;
```

사용하려면
```
import withSomething from './withSomething';

const MyComponent = () => <div>Hello</div>

//withSomething에서 넣어주는 기능이 적용된 MyComponent를 내보낸다.
export default withSomething(options)(MyComponent);
//옵션이 필요없는 HOC라면 , withSomething(MyComponent);

```

이떄 의문점이 생긴다.

```
import React, {Component} from 'react';
const withSomething = (BaseComponent, options) =>{
    //...
}
export default withSomething;
```
이렇게 해도 동작되지만, 이렇게 하지 않는 이유는 HOC를 여러개 사용하면 
```
export default withSomething(someOptions)(withOtherThing(otherOptions)(withAnything(anyOptions)(MyComponent)
    )
);
```
이런식으로 해야된다.

만약 compose를 사용한다면
```
const compose = (...fns) => 
    fns.reduceRight((prevEn, nextFn) =>
        (...args) => nextFn(prevFn(...args)),
        value => value
)

const enhance(
    withSomething(someOptions);
    withOtherthing(otherOptions);
    withAnything(anyOptions);
)

export default enhance(MyComponent)
```
이런식으로 가능해진다.
compose는 직접 다른파일에 작성해서 불러도 되고, lodash, redux, recompose등의 라이브러리에도 내장되어있다.