import React from 'react';
import Categories from './Categories';
import NewsList from './NewsList';

export default ({ match }) => {
    // 카테고리 미선택시 all로 사용
    const category = match.params.category || 'all';
    return (
        <>
            <Categories />
            <NewsList category={category} />
        </>
    )
}