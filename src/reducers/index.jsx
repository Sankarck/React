
import {add_1} from '../actions/sample';

export default function simpleCalc(state=0,action){
  console.log(action.payload)
  switch(action.type) { 
  case 'ADD_1':
        return parseInt(action.payload) + 1;
        break;
      } 
      return state;
}
    