
export const ADD_1 ='ADD_1';

export function add_1(val){
  console.log(val)
  return {
    type :"ADD_1",
    payload:val
  }
}




