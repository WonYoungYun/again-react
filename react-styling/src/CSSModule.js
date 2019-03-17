import React from 'react';
import styles from './CSSModule.module.css';

import classNames from 'classnames/bind';
//bind를 위한 classnames/bind 호출

const cx = classNames.bind(styles)
//미리 styles에서 클래스를 받아온다.

// css모듈을 사용하려면 styles.[클래스명]으로 사용
// 클래스를 2개이상 적용하려면 className={`${styles.wrapper} ${styles.inverted}`} 이런식으로 한다
const CSSModule = () => {
    return (
        <div className={cx('wrapper', 'inverted')}>
            {console.log(cx)}
            하이하이 저는 <span className="something">CSS Module</span>
        </div>
    )
}
export default CSSModule