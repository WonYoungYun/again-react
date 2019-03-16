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
                    onRemove(id);
                }}>[지우기]</div>
            </div>
        )
    }
}

export default TodoItem;