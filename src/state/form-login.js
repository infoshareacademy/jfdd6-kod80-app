const FETCH__BEGIN = 'form_login/FETCH__BEGIN';
const FETCH__SUCCESS = 'form_login/FETCH__SUCCESS';
const FETCH__FAIL = 'form_login/FETCH__FAILED';


// zmienić bazę danych po zmergowaniu się z developem


export const fetchSuccess = () => dispatch => {
  dispatch({type: FETCH__BEGIN});
  return fetch(
    process.env.PUBLIC_URL + '/data/concerts-gdansk.json'
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




export const saveUsers = (login, password) => ({
  type: SAVE_USERS,
  login, password
})






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
    case SAVE_USERS:
      return {
        ...state,



        data: state.data.




        })
      };
    default:
      return state
  }
}


