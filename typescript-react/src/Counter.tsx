import * as React from 'react';

interface CounterProps {
    onIncrement(): void;
    onDecrement(): void;
    number: number;
}

const Counter: React.SFC<CounterProps> = props => {
    return (
        <div>
            <h1>{props.number}</h1>
            <button onClick={props.onIncrement}>+1</button>
            <button onClick={props.onDecrement}>-1</button>
        </div>
    );
};

export default Counter;