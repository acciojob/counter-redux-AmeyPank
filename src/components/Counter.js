import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/actionsType';

const Counter = ({ counter, increment, decrement }) => {
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
    };
};

const mapDispatchToProps = {
    increment,
    decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
