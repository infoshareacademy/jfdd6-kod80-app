const FETCH__BEGIN = 'checkUser/FETCH__BEGIN';
const FETCH__SUCCESS = 'checkUser/FETCH__SUCCESS';
const FETCH__FAIL = 'checkUser/FETCH__FAILED';
const CHECK_USER = 'users/CHECK_USER';
export const fetchUser = () => dispatch => {
  dispatch({type: FETCH__BEGIN});
  return fetch(
    process.env.PUBLIC_URL + '/data/users.json'
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
      throw new Error('Connection error')
    }
  ).catch(
    error => dispatch({
      type: FETCH__FAIL,
      error: error.message
    })
  )
};
export const checkUsers = (login, password) => ({
  type: CHECK_USER,
  login, password
});
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
        fetching: false
      };
    case FETCH__FAIL:
      return {
        ...state,
        fetching: false,
        error: action.error
      };
    case CHECK_USER:
      return {
        ...state,
        data: state.data.concat({
          id: state.data.map(user => user.id).reduce((prev,next) => prev > next ? prev : next, -Infinity) +1,
          name: 'unknown',
          login: action.login,
          email: 'unknown',
          password: action.password
        })
      };
    default:
      return state
  }
}
