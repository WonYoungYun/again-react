import React from 'react';
import styled, { css } from 'styled-components';

// const MyComponent = styled.div``;

//문자열로 styled의 인자로 전달
// const MyInput = styled('input')`    
//     background:gray;
// `;

//컴포넌트 형식의 값을 넣어준다.
// const StyledLink = styled(Link)`
//     color:blue;
// `;

//Props를 통해 설정도 가능
const Box = styled.div`

    background: ${props => props.color || 'blue'};
    padding:1rem;
    display:flex;
    /* 1024px 이면 가운데 정렬을 하고
    가로 크기가 작아짐에 따라 사이즈를 줄이고
    768px 미만으로 되면 꽉 채운다 */
    width: 1024px;
    margin: 0 auto;
    @media (max-width: 1024px) {
        width: 768px;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const Button = styled.button`
    background: #fff;
    color:#000;
    border-radius:4px;
    padding: .5rem;
    display:flex;
    align-items:center;
    box-sizing:border-box;
    font-size:1rem;
    font-weight:600;
    &:hover{
        background:rgba(255,255,255, .9);
    }
    & + button{
        margin-left:1rem;
    }
    /* inverted값이 true일떄 적용 */
    ${props =>
        props.inverted && css`
        background:none;
        border:2px solid #fff;
        color:#fff;
        &:hover{
        background:#fff;
        color:#000;
        }
    `};
`;
//globalStyles, keyframes등등도 있음

export default () => (
    <Box color="black">
        <Button>안녕하세요</Button>
        <Button inverted={true}>테두리</Button>
    </Box>
);



