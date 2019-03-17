import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.todo !== this.props.todo;
    }
    render() {
        const { text, id, checked, onCheck, onRemove } = this.props;
        return (
            <div className={`TodoItem ${checked && 'active'}`} onClick={() => onCheck(id)}>
                <div className="check">&#10004;</div>
                <div className="text">{text}</div>
                <div className="remove" onClick={e => {
                    e.stopPropagation();//이벤트 버블링을 없앤다.
                    onRemove(id);//이렇게 변수를 전달해줄 경우, onClick={onRemove(id)}이렇게 하면 함수가 렌더링될때마다 즉시 실행되어 버린다.
                }}>[지우기]</div>
            </div>
        )
    }
}

export default TodoItem;