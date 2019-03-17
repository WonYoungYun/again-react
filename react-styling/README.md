React Styling
=

1. CSS
2. SASS
3. css.module
4. stlyed-components
   
CSS
-
CSS파일을 불러 적용
```
import './App.css';
```

SASS
-
```
yarn add node-sass;
```
로 설치

.scss파일을 생성하여 적용하면된다.

node_modules에서 불러오기
```
@import '../../../node_modules/library/styles';
```
와 같은 형식으로 거슬러 올라도 되지만
```
@import '~library/styles`;
```
이런식으로 해도 된다.

CSS Module
-
CSSNAME.module.css 형태로 생성
클래스네임을 자동으로 고유값으로 만들어 컴포넌트 스타일 중첩현상을 방지한다.

classnames
-
CSS클래스를 조건부로 설정할 떄 유용한 라이브러리 이다.
```
yarn add classnames
```
css, scss 적용가능


styled-components
-
CSS-in-JS관련 라이브러리

