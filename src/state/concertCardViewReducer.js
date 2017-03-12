const FETCH = 'database/FETCH'


export const fetchSuccess = () => ({
    type: FETCH
})




const initialState = {
    values: null
}

export default (state = initialState, action = {}) => state


