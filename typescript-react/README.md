타입스크립트와 리액트
=

프로젝트 생성
```
yarn create react-app project --typescript
```

타입스크립트를 사용하는 이유
-

1. IDE를 더 적극적으로 활용(자동완성, 타입확인)
    해당 함수가 어떤 파라미터를 필요로 하는지, 그리고 어떤 값을 반환하는지, 코드를 열어보지 않아도 확인이 가능하다. 리액트 컴포넌트의 경우 해당 컴포넌트를 사용할 때 props로 뭘 전달해야하는지, 컴포넌트 내부에 어떤 props와 state가 있는지 확인이 가능하다.

2. 실수방지
    함수, 컴포넌트 타입이 추론되기 떄문에, 사소한 오타를 만들게 되면 코드를 실행하지 않아도 IDE상에서 바로 확인이 가능하다. null이나 undefined일 수도 있는 값의 내부 값 혹은 함수를 호출한다면, 사전에 null체킹을 하지 않으면 오류를 발생함으로 null체킹도 가능하다.

사용법은 [공식문서](https://typescript-kr.github.io/) 를 참조하자.


let과 const
-
```
let text:string = '';
let number: number = 5;
const array: number[] = [1,2,3];
```

함수사용
-
```
function double(numbers: number[]): number[] {
    return numbers.map(n => n * 2);
}
```
interface사용
-
클래스 혹은 객체를 위한 타입을 만들 떄 사용되는 문법
```
interface Shape{
    getArea(): number
}
class Circle implements Shape{
    r:number;
    constructor(r:number){
        this.r =r;
    }
    getArea(){
        return this.r * this.r * 3.14;
    }
    const circle = new Circle(3);
}
```
일반객체에 타입 지원
```
interface Person{
    name: string
}

cosnt person: Person ={
    name: '홍길동'
};

interface Programmer extends Person{
    skills: string[];
}

const programmer: Programmer = {
    name:'홍길동',
    skills: ['a', 'b'];
};

function printSkills(p: Programmer){
    console.log(p.skills);
}
```

Type 사용
-
Type은 Interface와 비슷한데 주로 클래스가 아닌 일반 객체를 위한 타입을 지정할 떄 사용된다.

```
type Person = {
    name: string
}
conat person: Person ={
    name: '홍길동'
}
type Programmer = Person &{
    skills: string[];
}
const programmer: Programmer = {
    name: '홍길동',
    skills: ['a','b']
}
```
type은 &연산자를 사용하여 다른 타입과 결합 시킬 수 있다.  
리액트 컴포넌트의 props나 state를 타입지원할 때 interface나 type중 아무거나 사용할 수 있다, 일관성있게 구성만 하면 된다.
