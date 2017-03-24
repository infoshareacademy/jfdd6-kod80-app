//
// const LOGOUT = 'user/LOGOUT'
//
// import Api from '../api'
//
// // http://localhost:3010/api/users/logout?access_token=ABC1
//
// export const logOut = (accessToken) => dispatch => fetch(
//   Api.url + '/users/logout?access_token=' + accessToken, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       accessToken: accessToken
//     })
//   }.then(
//     response => response.json()
//   ).then(
//     data => dispatch({
//       type: ATTEND_CONCERT,
//       concertId,
//       favId: data.id
//     })
//   )