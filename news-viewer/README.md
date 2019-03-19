외부 데이터 연동을 이용한 뉴스 뷰어
=


```
<a href={url} target="_blank" rel="noopener noreferrer"></a>
```
가 있다 여기서 rel의 noopener는 Tabnabbing을 방지하기 위해 있다.

Tabnabbing
-
Tabnabbing은 HTML 문서 내에서 링크(target="_blank"인 a태그)를 클릭하였을 때 새로 열린 탭에서 기존의 문서의 location을 피싱 사이트로 변경하여 정보를 탈취하는 공격기술을 의미한다.  
rel=noopener로 자바스크립트의 변경을 막을 수 있지만, 지원되지않는 브라우저 존재.  
noreferrer는 브라우저가 다른 페이지로 이동할 떄 헤더를 통해 리퍼러로 보내는 것을 막는다.

자세한 사항은 [여기](https://blog.coderifleman.com/2017/05/30/tabnabbing_attack_and_noopener/)를 참고








