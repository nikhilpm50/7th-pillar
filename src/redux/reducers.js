import { SEARCH } from "./actions";


const initialState = {
  posters:[],
  filtered:[]
   
};

export const reducer= (state = initialState, {type,payload})=> {
  switch(type) {
   case 'SET_POSTERS':
    
    return {...state,posters:payload};
    
   case SEARCH:
    let value = payload;
    console.log(value);
    console.log(state.posters)
    let filteredValues = state.posters.filter(product => {
      //return any product whose name contains the input box string
      return product.name.toLowerCase().includes(value.toLowerCase());
  });
  console.log(filteredValues)
    return {
      ...state,
      filtered: filteredValues,
      
  };
  
    default:
      return state;
   
  }
}