const FETCH__BEGIN = 'user/FETCH__BEGIN';
const FETCH__SUCCESS = 'user/FETCH__SUCCESS';
const FETCH__FAIL = 'user/FETCH__FAILED';

import Api from '../api'

export const fetchUser = (accessToken, userId) => dispatch => {
  dispatch({type: FETCH__BEGIN});
  return fetch(
      Api.url + '/users/' + userId + '?access_token=' + accessToken
  ).then(
      response => {
          if (response.ok) {
              return response.json().then(
                  data => dispatch({
                      type: FETCH__SUCCESS,
                      data
                  })
              ).catch(
                  error => dispatch({
                      type: FETCH__FAIL,
                      error: 'Malformed JSON response'
                  })
              )
          }
          throw new Error('Connection error');
      }
  ).catch(
      error => dispatch({
          type: FETCH__FAIL,
          error: error.message
      })
  )
};

const initialState = {
  data: null,
  fetching: false,
  error: null
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
      case FETCH__BEGIN:
          return {
              ...state,
              fetching: true,
              error: null
          };
      case FETCH__SUCCESS:
          return {
              ...state,
              data: action.data,
              fetching: false,
              error: null
          };
      case FETCH__FAIL:
          return {
              ...state,
              fetching: false,
              error: action.error
          };
      default:
          return state
  }
}