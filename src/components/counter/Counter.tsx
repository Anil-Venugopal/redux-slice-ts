import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { incrementCount } from '../../redux/counterSlice';

const Counter: React.FC=()=>{
    const dispatch = useAppDispatch();
    const count = useAppSelector((state:any) => state.count.count);
    const handleClick =()=>{
        dispatch(incrementCount(1))
    }
    return(
        <div>
            <h1>count: {count}</h1>
            <button onClick={handleClick}>ADD</button>
        </div>
    )
}
export default Counter;