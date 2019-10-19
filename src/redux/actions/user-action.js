
// Action for getting user details
const userDetailAction = (user) => dispatch => {
    dispatch({
        type: 'GET_USER_DETAIL',
        payload: user
    })
}
export default userDetailAction;

