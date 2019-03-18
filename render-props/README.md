Render Props
=

HOC가 컴포넌트를 함수로 감싸 특정기능을 부여 해줬다면, Render Props는 JSX단에서 유사한 작업을 할 수 있게 한다.

HOC
```
    export default withForm(
        {
            username: '',
            password: ''
        },
        true
    )(LoginForm);
```

Render Props
```
    <FormManager
    initialForm={{
        username: '',
        password: ''
    }}
    onSubmit={this.handleSubmitLogin}
    >
    {({ form, onChange, onSubmit }) => (
        <LoginForm onChange={onChange} onSubmit={onSubmit} form={form} />
    )}
    </FormManager>
```

두 개의 차이점은 HOC는 사용하기 위해 새로운 컴포넌트를 만들어야 하지만 Render Props는 컴포넌트를 만들지 않는다.  

Render Props는 주로 두가지 형태로 사용된다.

1. render라는 이름을 가진 props를 전달
```
<MyComponent
    render={({name}) =>{
        <div>
            Hello <b>{name}</b>
        </div>
    }}
/>
```
MyComponent.js
```
import React,{Component} from 'react;

class MyComponent extends Component{
    render(){
        return this.props.render({name: 'world'});
    }
}

export default MyComponent;
```
보통 props는 부모컴포넌트가 자식컴포넌트에게 전달해주지만, 여기서는 반대로 자식 컴포넌트가 부모컴포넌트에게 특정 값을 주고 있다.  

2. render 대신 그냥 children 자체를 함수로 전달.
```
    <MyComponent>
        {({name}) => (
            <div>
                Hello <b>{name}</b>
            </div>
        )}
    </MyComponent>
``` 