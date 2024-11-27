import { connect } from "react-redux";
import {increment, decrement} from '../actions/counterActions';

const Counter = ({count, increment, decrement}) =>{
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

const mapStateProps = (state) =>({
    count: state.counter.count,
});

const mapDispatchToProps = {
    increment,
    decrement,
};

export default connect(mapStateProps, mapDispatchToProps)(Counter);
