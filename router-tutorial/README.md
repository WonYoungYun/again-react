react-router
=

```
yarn add react-router-dom
```
로 모듈을 설치

사용법
-
```
<Route path="주소" component={컴포넌트}>
```
로 사용합니다.

```
<Route path="/" component={Home}>
<Route path="/about" component={About}>
```
의 경우 /about으로 가면 /를 포함하기 때문에 Home컴포넌트도 불러오게 된다.
이것을 막기 위해
```
<Route path="/" exact component={Home}>
```
를 사용한다.

Link
-
라우터를 이동하기 위해 <a href=> 대신 react-router-dom의 Link를 사용한다. 이 컴포넌트는 HTML5 HistoryAPI를 사용하여 브라우저 주소만을 바꾸고 새로 불러오지는 않는다.

파라미터와 쿼리
-
파라미터 : /user/man  
쿼리 : /user?name=man  
일반적으로 파라미터는 특정 ID나 이름을 가지고 조회할 떄 사용, 쿼리의 경우 검색하거나 요청할 떄 필요할 옵션을 달 떄 사용

파라미터는 match의 params 값을 참조한다.
쿼리는 location의 search값을 참조한다.
쿼리는 문자열 형태로 되어있으며 qs라는 라이브러리를 통해 쉽게 할 수있다.
```
yarn add qs
```

서브라우트
-
라우트 내부의 라우트, 컴포넌트안에 또 Route 컴포넌트를 렌더링 하면 된다.


history 객체
-
라우트로 사용된 컴포넌트에게서 props로 history, match, location이 전달된다.  
history를 통해 우리는 컴포넌트 내에 구현하는 메소드에서 라우터에 직접 접근이 가능하다.  
뒤로가기, 특정경로로 이동, 이탈방지 등


withRouter HoC
-
withRouter 를 통해 라우트 컴포넌트가 아닌 곳에서 match/location/history를 사용할 수 있다.  

자신의 부모 컴포넌트 기준의 match값이 전달된다. 예제를 보면 현재 you에 있어도 match의 params에는 you가 나오지 않는 것을 확인가능

Switch
-
여러 Route를 감싸 그 중 규칙이 일치하는 라우트 단 하나만을 렌더링 시켜줍니다. Switch를 사용하면, 아무것도 일치하지 않을 때 보여줄 NotFound 페이지를 구현 할 수도 있습니다.

NavLink
-
Link랑 비슷하지만,  현재 경로와 Link 에서 사용하는 경로가 일치할 경우, 특정 스타일 혹은 클래스를 적용 할 수 있는 컴포넌트  
activeStyles, activeClassName이 있다.

Redirect
-
페이지를 리다이렉트 하는 컴포넌트

Prompt
-
history.block과 비슷함

Route Config
-
JSX형태로 라우트를 선언하는 것이 아니라 Vue처럼 배열/객체를 사용

Memory Router
-
실제로 주소는 존재하지 않는 라우터, react-native나 임베디드 웹앱에서 사용


[React-Router 공식 메뉴얼](https://reacttraining.com/react-router/web/guides/philosophy)