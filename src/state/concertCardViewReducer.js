
const FETCH__BEGIN = 'database/FETCH__BEGIN';
const FETCH__SUCCESS = 'database/FETCH__SUCCESS';
const FETCH__FAIL = 'database/FETCH__FAILED';

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
                error:action.error
            };
        default:
            return state
    }
}


