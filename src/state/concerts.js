//to co w counter.js

const GIVE_ME_CONCERTS = 'concerts/GIVE_ME_CONCERTS'

//ACTION_CRETOR
export const fetchSuccess = () => ({
  type: GIVE_ME_CONCERTS
})
// export const fetchSuccess = () => {
//   // we return thunk;
//   // thunk will get one call argument from redux-thunk;
//   // the argument will be a dispatch method of store;
//   return function (dispatch) {
//     return fetch(
//       process.env.PUBLIC_URL + '/data/data-testowa-baza-danych.json'
//     ).then(
//       response => response.json()
//     ).then(
//       concerts => dispatch({ type: GIVE_ME_CONCERTS, data: concerts })
//     )
//   }


const initialState = {
  concerts: null
}

const reducer = ( state = initialState, action = {}) => {
  switch (action.type) {
    default: return state
  }
}

export default reducer
