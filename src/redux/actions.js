export const setPosters = (posters) =>{
  return{
    type: 'SET_POSTERS',
    payload: posters,
  }
}

export const SEARCH = 'SEARCH';

export function search(value) {
  return {type: SEARCH, payload: value};
}