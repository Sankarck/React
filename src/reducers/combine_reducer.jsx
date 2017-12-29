import { combineReducers } from 'redux';
import simpleCalc from './index'; 

const ReducersConnect =  combineReducers({
    add_1 : simpleCalc
});

export default ReducersConnect;