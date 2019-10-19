
const commentAction = (comment) => dispatch => {
    dispatch({
        type: 'GET_COMMENT_DETAIL',
        payload: comment
    })
}

export default commentAction;

