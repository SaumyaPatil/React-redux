export {INCREMENT, DECREMENT} from './actionTypes';

export const increment = ({INCREMENT}) =>({
    type: INCREMENT,
});

export const decrement = ({DECREMENT}) =>({
    type: DECREMENT,
});
